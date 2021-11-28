import original from "date-fns/previousSunday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function previousSunday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
