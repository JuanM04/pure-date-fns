import original from "date-fns/isSameYear"

import toJSDate from "./toJSDate"

export default function isSameYear(dateLeft: string, dateRight: string): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
