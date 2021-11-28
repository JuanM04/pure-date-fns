import original from "date-fns/isYesterday"

import {stringToDate} from "./_lib/transform"

export default function isYesterday(date: string): boolean {
  return original(stringToDate(date))
}
