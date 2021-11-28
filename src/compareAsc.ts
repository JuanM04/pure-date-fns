import original from "date-fns/compareAsc"

import {stringToDate} from "./_lib/transform"

export default function compareAsc(dateLeft: string, dateRight: string): number {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
