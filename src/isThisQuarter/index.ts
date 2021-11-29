import original from "date-fns/isThisQuarter"

import toJSDate from "../toJSDate"

export default function isThisQuarter(date: string): boolean {
  return original(toJSDate(date))
}
