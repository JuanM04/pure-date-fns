import original from "date-fns/endOfYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function endOfYear(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
