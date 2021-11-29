import original from "date-fns/closestIndexTo"

import toJSDate from "../toJSDate"

export default function closestIndexTo(
  dateToCompare: string,
  datesArray: string[]
): number | undefined {
  return original(toJSDate(dateToCompare), datesArray.map(toJSDate))
}
