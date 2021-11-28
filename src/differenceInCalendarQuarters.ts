import original from "date-fns/differenceInCalendarQuarters"

import {stringToDate} from "./_lib/transform"

export default function differenceInCalendarQuarters(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
