import original from "date-fns/eachWeekendOfMonth"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function eachWeekendOfMonth(date: string): string[] {
  return original(toJSDate(date)).map(fromJSDate)
}
