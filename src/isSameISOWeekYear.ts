import original from "date-fns/isSameISOWeekYear"

import toJSDate from "./toJSDate"

export default function isSameISOWeekYear(dateLeft: string, dateRight: string): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
