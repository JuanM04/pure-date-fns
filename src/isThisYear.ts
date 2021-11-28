import original from "date-fns/isThisYear"

import {stringToDate} from "./_lib/transform"

export default function isThisYear(date: string): boolean {
  return original(stringToDate(date))
}
