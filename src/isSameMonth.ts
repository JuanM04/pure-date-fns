import original from "date-fns/isSameMonth"

import toJSDate from "./toJSDate"

export default function isSameMonth(dateLeft: string, dateRight: string): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
