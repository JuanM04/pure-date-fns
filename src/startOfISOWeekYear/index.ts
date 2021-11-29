import original from "date-fns/startOfISOWeekYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function startOfISOWeekYear(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
