import original from "date-fns/setISOWeekYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function setISOWeekYear(date: string, isoWeekYear: number): string {
  return fromJSDate(original(toJSDate(date), isoWeekYear))
}
