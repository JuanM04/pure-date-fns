import original from "date-fns/isThisISOWeek"

import {stringToDate} from "./_lib/transform"

export default function isThisISOWeek(date: string): boolean {
  return original(stringToDate(date))
}
