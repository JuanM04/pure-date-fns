import original from "date-fns/isWeekend"

import {stringToDate} from "./_lib/transform"

export default function isWeekend(date: string): boolean {
  return original(stringToDate(date))
}
