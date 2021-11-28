import original from "date-fns/compareDesc"

import {stringToDate} from "./_lib/transform"

export default function compareDesc(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
