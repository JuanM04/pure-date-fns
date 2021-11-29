import original from "date-fns/max"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function max(datesArray: string[]): string {
  return fromJSDate(original(datesArray.map(toJSDate)))
}
