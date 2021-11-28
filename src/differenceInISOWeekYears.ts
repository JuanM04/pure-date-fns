import original from "date-fns/differenceInISOWeekYears"

import {stringToDate} from "./_lib/transform"

export default function differenceInISOWeekYears(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}