import original from "date-fns/eachWeekendOfYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function eachWeekendOfYear(date: string): string[] {
  return original(toJSDate(date)).map(fromJSDate)
}
