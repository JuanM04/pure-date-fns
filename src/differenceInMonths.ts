import original from "date-fns/differenceInMonths"

import {stringToDate} from "./_lib/transform"

export default function differenceInMonths(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
