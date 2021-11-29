import original from "date-fns/differenceInWeeks"

import toJSDate from "../toJSDate"

export default function differenceInWeeks(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
