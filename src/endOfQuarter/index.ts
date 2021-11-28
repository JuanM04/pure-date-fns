import original from "date-fns/endOfQuarter"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function endOfQuarter(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
