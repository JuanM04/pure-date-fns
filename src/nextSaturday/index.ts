import original from "date-fns/nextSaturday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function nextSaturday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
