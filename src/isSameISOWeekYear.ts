import original from "date-fns/isSameISOWeekYear"

import {stringToDate} from "./_lib/transform"

export default function isSameISOWeekYear(dateLeft: string, dateRight: string): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
