import original from "date-fns/isSameMonth"

import {stringToDate} from "./_lib/transform"

export default function isSameMonth(dateLeft: string, dateRight: string): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
