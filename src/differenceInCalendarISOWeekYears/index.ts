import original from "date-fns/differenceInCalendarISOWeekYears"

import toJSDate from "./toJSDate"

export default function differenceInCalendarISOWeekYears(
  dateLeft: string,
  dateRight: string
): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
