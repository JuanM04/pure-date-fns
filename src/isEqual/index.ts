import original from "date-fns/isEqual"

import toJSDate from "../toJSDate"

export default function isEqual(dateLeft: string, dateRight: string): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
