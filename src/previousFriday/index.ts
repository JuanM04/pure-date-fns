import original from "date-fns/previousFriday"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function previousFriday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
