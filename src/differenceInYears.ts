import original from "date-fns/differenceInYears"

import {stringToDate} from "./_lib/transform"

export default function differenceInYears(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
