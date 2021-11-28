import original from "date-fns/isSaturday"

import {stringToDate} from "./_lib/transform"

export default function isSaturday(date: string): boolean {
  return original(stringToDate(date))
}
