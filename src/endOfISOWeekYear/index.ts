import original from "date-fns/endOfISOWeekYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function endOfISOWeekYear(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
