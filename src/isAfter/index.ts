import original from "date-fns/isAfter"

import toJSDate from "./toJSDate"

export default function isAfter(date: string, dateToCompare: string): boolean {
  return original(toJSDate(date), toJSDate(dateToCompare))
}
