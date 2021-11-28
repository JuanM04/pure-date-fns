import original from "date-fns/differenceInCalendarISOWeeks"

import {stringToDate} from "./_lib/transform"

export default function differenceInCalendarISOWeeks(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
