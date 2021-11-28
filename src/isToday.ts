import original from "date-fns/isToday"

import {stringToDate} from "./_lib/transform"

export default function isToday(date: string): boolean {
  return original(stringToDate(date))
}
