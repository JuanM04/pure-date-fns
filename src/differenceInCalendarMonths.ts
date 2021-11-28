import original from "date-fns/differenceInCalendarMonths"

import {stringToDate} from "./_lib/transform"

export default function differenceInCalendarMonths(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
