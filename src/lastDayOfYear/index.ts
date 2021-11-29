import original from "date-fns/lastDayOfYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function lastDayOfYear(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
