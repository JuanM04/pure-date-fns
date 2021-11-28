import original from "date-fns/isThursday"

import {stringToDate} from "./_lib/transform"

export default function isThursday(date: string): boolean {
  return original(stringToDate(date))
}
