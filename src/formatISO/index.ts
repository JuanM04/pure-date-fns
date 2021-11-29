import original from "date-fns/formatISO"

import toJSDate from "../toJSDate"

export interface Options {
  format?: "extended" | "basic"
  representation?: "complete" | "date" | "time"
}

export default function formatISO(date: string, options?: Options): string {
  return original(toJSDate(date), options)
}
