import original from "date-fns/previousSaturday"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function previousSaturday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
