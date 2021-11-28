const dateRegex = /^\d{4}-\d{2}-\d{2}$/

export default function isDate(value: unknown): boolean {
  return typeof value === "string" && dateRegex.test(value)
}
