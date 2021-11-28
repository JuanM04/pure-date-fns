import original from "date-fns/isThisMonth"

import {stringToDate} from "./_lib/transform"

export default function isThisMonth(date: string): boolean {
  return original(stringToDate(date))
}
