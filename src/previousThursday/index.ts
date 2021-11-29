import original from "date-fns/previousThursday"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function previousThursday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
