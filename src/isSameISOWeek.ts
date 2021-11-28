import original from "date-fns/isSameISOWeek"

import {stringToDate} from "./_lib/transform"

export default function isSameISOWeek(dateLeft: string, dateRight: string): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
