import original from "date-fns/isSameQuarter"

import {stringToDate} from "./_lib/transform"

export default function isSameQuarter(dateLeft: string, dateRight: string): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
