import original from "date-fns/differenceInCalendarDays"

import toJSDate from "./toJSDate"

export default function differenceInCalendarDays(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
