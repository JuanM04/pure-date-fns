import original from "date-fns/differenceInQuarters"

import {stringToDate} from "./_lib/transform"

export default function differenceInQuarters(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
