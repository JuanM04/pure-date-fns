import original from "date-fns/isSunday"

import {stringToDate} from "./_lib/transform"

export default function isSunday(date: string): boolean {
  return original(stringToDate(date))
}
