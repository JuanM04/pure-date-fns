import original from "date-fns/differenceInWeeks"

import {stringToDate} from "./_lib/transform"

export default function differenceInWeeks(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
