import original from "date-fns/closestTo"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function closestTo(dateToCompare: string, datesArray: string[]): string | undefined {
  const result = original(toJSDate(dateToCompare), datesArray.map(toJSDate))

  if (result) return fromJSDate(result)
  else return undefined
}
