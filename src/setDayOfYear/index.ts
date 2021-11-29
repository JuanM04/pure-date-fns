import original from "date-fns/setDayOfYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function setDayOfYear(date: string, dayOfYear: number): string {
  return fromJSDate(original(toJSDate(date), dayOfYear))
}
