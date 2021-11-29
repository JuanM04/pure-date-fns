import isDate from "../isDate"

export default function toJSDate(date: string): Date {
  if (!isDate(date)) {
    throw new TypeError("Invalid date format")
  }

  return new Date(`${date}T00:00:00`)
}
