import ogCompareAsc from "date-fns/compareAsc"

import {stringToDate} from "./_lib/transform"

export default function compareAsc(dateLeft: string, dateRight: string): number {
  return ogCompareAsc(stringToDate(dateLeft), stringToDate(dateRight))
}
