import original from "date-fns/isFriday"

import {stringToDate} from "./_lib/transform"

export default function isFriday(date: string): boolean {
  return original(stringToDate(date))
}
