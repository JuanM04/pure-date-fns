import original from "date-fns/isLeapYear"

import toJSDate from "./toJSDate"

export default function isLeapYear(date: string): boolean {
  return original(toJSDate(date))
}
