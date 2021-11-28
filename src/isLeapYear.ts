import original from "date-fns/isLeapYear"

import {stringToDate} from "./_lib/transform"

export default function isLeapYear(date: string): boolean {
  return original(stringToDate(date))
}
