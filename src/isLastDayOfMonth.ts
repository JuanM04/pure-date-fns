import original from "date-fns/isLastDayOfMonth"

import {stringToDate} from "./_lib/transform"

export default function isLastDayOfMonth(date: string): boolean {
  return original(stringToDate(date))
}
