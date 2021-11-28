import original from "date-fns/differenceInCalendarWeeks"

import toJSDate from "./toJSDate"

export default function differenceInCalendarWeeks(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
