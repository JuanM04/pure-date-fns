import original from "date-fns/differenceInISOWeekYears"

import toJSDate from "../toJSDate"

export default function differenceInISOWeekYears(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
