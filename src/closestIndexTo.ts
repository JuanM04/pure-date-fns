import ogClosestIndexTo from "date-fns/closestIndexTo"

import {stringToDate} from "./_lib/transform"

export default function closestIndexTo(
  dateToCompare: string,
  datesArray: string[]
): number | undefined {
  return ogClosestIndexTo(stringToDate(dateToCompare), datesArray.map(stringToDate))
}
