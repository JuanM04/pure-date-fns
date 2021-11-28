import original from "date-fns/isMonday"

import {stringToDate} from "./_lib/transform"

export default function isMonday(date: string): boolean {
  return original(stringToDate(date))
}
