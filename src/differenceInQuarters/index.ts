import original from "date-fns/differenceInQuarters"

import toJSDate from "../toJSDate"

export default function differenceInQuarters(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
