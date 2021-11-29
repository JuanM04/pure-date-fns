import original from "date-fns/isYesterday"

import toJSDate from "../toJSDate"

export default function isYesterday(date: string): boolean {
  return original(toJSDate(date))
}
