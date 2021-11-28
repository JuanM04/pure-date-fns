import original from "date-fns/differenceInCalendarWeeks"

import {stringToDate} from "./_lib/transform"

export default function differenceInCalendarWeeks(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
