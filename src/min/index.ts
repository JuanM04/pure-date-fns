import original from "date-fns/min"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function min(datesArray: string[]): string {
  return fromJSDate(original(datesArray.map(toJSDate)))
}
