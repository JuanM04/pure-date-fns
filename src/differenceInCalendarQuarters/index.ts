import original from "date-fns/differenceInCalendarQuarters"

import toJSDate from "./toJSDate"

export default function differenceInCalendarQuarters(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
