import original from "date-fns/lastDayOfISOWeek"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function lastDayOfISOWeek(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
