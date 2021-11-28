import original from "date-fns/differenceInDays"

import {stringToDate} from "./_lib/transform"

export default function differenceInDays(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
