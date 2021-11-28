import original from "date-fns/isSameQuarter"

import toJSDate from "./toJSDate"

export default function isSameQuarter(dateLeft: string, dateRight: string): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
