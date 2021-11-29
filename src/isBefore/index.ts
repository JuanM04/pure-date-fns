import original from "date-fns/isBefore"

import toJSDate from "../toJSDate"

export default function isBefore(date: string, dateToCompare: string): boolean {
  return original(toJSDate(date), toJSDate(dateToCompare))
}
