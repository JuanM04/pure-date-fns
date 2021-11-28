import original from "date-fns/differenceInCalendarISOWeeks"

import toJSDate from "./toJSDate"

export default function differenceInCalendarISOWeeks(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
