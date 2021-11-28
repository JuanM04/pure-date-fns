import original from "date-fns/nextSunday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function nextSunday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
