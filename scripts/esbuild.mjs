import esbuild from "esbuild"
import babel from "esbuild-plugin-babel"
import fs from "fs/promises"
import {globby} from "globby"
import {join as pathJoin} from "path"

const writeJSON = (path, content) =>
  fs.writeFile(path, JSON.stringify(content, null, 2), {encoding: "utf-8"})

/**
 * Generate esbuild config
 *
 * @param {'esm'|'cjs'} format
 * @returns {import('esbuild').BuildOptions}
 */
const generateConfig = format => ({
  bundle: false,
  minify: true,
  platform: "neutral",
  target: "es6",
  format,
  plugins: [
    babel({
      config: {
        presets: ["@babel/preset-typescript"],
        plugins:
          format === "esm"
            ? ["babel-plugin-add-import-extension"]
            : [
                "@babel/plugin-transform-modules-commonjs",
                "babel-plugin-add-import-extension",
                "babel-plugin-add-module-exports",
              ],
      },
    }),
  ],
})

async function main() {
  const srcDir = pathJoin(process.cwd(), "src")
  const distDir = pathJoin(process.cwd(), "dist")
  const esmDir = pathJoin(process.cwd(), "dist", "_esm")

  await fs.rm(distDir, {recursive: true, force: true})
  await fs.mkdir(distDir)
  await fs.mkdir(esmDir)

  console.info("Cleaned dist/")

  const entryPoints = await globby("**/index.ts", {
    ignore: ["index.ts"],
    cwd: srcDir,
  })

  await Promise.all(
    entryPoints.map(async entryPoint => {
      const srcFile = pathJoin(srcDir, entryPoint)
      const name = entryPoint.slice(0, -9) // remove "/index.ts"

      await Promise.all([
        esbuild.build({
          ...generateConfig("cjs"),
          entryPoints: [srcFile],
          outfile: pathJoin(distDir, name, "index.js"),
        }),
        esbuild.build({
          ...generateConfig("esm"),
          entryPoints: [srcFile],
          outfile: pathJoin(esmDir, name, "index.js"),
        }),
      ])

      let backToRoot = ""
      for (let i = 0; i < name.split("/").length; i++) {
        backToRoot = pathJoin(backToRoot, "..")
      }

      await writeJSON(pathJoin(distDir, name, "package.json"), {
        sideEffects: false,
        module: pathJoin(backToRoot, "_esm", name, "index.js"),
        typings: "index.d.ts",
      })

      await writeJSON(pathJoin(esmDir, name, "package.json"), {
        sideEffects: false,
        typings: pathJoin(backToRoot, "..", name, "index.d.ts"),
      })
    })
  )

  console.info("Bundled functions")

  await Promise.all([
    esbuild.build({
      ...generateConfig("cjs"),
      entryPoints: ["src/index.ts"],
      outfile: pathJoin(distDir, "index.js"),
    }),
    esbuild.build({
      ...generateConfig("esm"),
      entryPoints: ["src/index.ts"],
      outfile: pathJoin(esmDir, "index.js"),
    }),
  ])

  console.info("Bundled index")

  const rawPackage = await fs.readFile("package.json", {encoding: "utf-8"})
  const packageData = JSON.parse(rawPackage)

  await writeJSON(pathJoin(distDir, "package.json"), {
    name: packageData.name,
    version: packageData.version,
    main: "index.js",
    module: "_esm/index.js",
    typings: "index.d.ts",
    sideEffects: false,
    dependencies: packageData.dependencies,
    license: packageData.license,
  })

  console.info("Created package.json")
  console.info("Finished bundling!")
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
