import original from "date-fns/lastDayOfMonth"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function lastDayOfMonth(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
