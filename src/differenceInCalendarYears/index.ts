import original from "date-fns/differenceInCalendarYears"

import toJSDate from "./toJSDate"

export default function differenceInCalendarYears(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
