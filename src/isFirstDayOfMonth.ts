import original from "date-fns/isFirstDayOfMonth"

import {stringToDate} from "./_lib/transform"

export default function isFirstDayOfMonth(date: string): boolean {
  return original(stringToDate(date))
}
