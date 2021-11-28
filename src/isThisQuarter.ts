import original from "date-fns/isThisQuarter"

import {stringToDate} from "./_lib/transform"

export default function isThisQuarter(date: string): boolean {
  return original(stringToDate(date))
}
