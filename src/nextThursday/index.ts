import original from "date-fns/nextThursday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function nextThursday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
