import original from "date-fns/differenceInCalendarYears"

import {stringToDate} from "./_lib/transform"

export default function differenceInCalendarYears(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
