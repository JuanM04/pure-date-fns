import original from "date-fns/differenceInCalendarISOWeekYears"

import {stringToDate} from "./_lib/transform"

export default function differenceInCalendarISOWeekYears(
  dateLeft: string,
  dateRight: string
): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
