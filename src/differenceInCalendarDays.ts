import original from "date-fns/differenceInCalendarDays"

import {stringToDate} from "./_lib/transform"

export default function differenceInCalendarDays(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
