import original from "date-fns/isSameISOWeek"

import toJSDate from "../toJSDate"

export default function isSameISOWeek(dateLeft: string, dateRight: string): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
