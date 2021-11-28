import ogClosestTo from "date-fns/closestTo"

import {dateToString, stringToDate} from "./_lib/transform"

export default function closestTo(dateToCompare: string, datesArray: string[]): string | undefined {
  const result = ogClosestTo(stringToDate(dateToCompare), datesArray.map(stringToDate))

  if (result) return dateToString(result)
  else return undefined
}
