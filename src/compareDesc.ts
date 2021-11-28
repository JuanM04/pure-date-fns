import ogCompareDesc from "date-fns/compareDesc"

import {stringToDate} from "./_lib/transform"

export default function compareDesc(dateLeft: string, dateRight: string): number {
  return ogCompareDesc(stringToDate(dateLeft), stringToDate(dateRight))
}
