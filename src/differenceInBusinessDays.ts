import original from "date-fns/differenceInBusinessDays"

import {stringToDate} from "./_lib/transform"

export default function differenceInBusinessDays(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
