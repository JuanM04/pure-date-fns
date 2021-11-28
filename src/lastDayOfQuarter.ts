import original from "date-fns/lastDayOfQuarter"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function lastDayOfQuarter(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
