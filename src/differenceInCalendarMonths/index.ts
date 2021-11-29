import original from "date-fns/differenceInCalendarMonths"

import toJSDate from "../toJSDate"

export default function differenceInCalendarMonths(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
