import original from "date-fns/endOfMonth"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function endOfMonth(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
