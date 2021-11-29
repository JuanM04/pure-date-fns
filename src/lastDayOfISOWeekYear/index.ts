import original from "date-fns/lastDayOfISOWeekYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function lastDayOfISOWeekYear(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
