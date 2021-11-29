import original from "date-fns/isSunday"

import toJSDate from "../toJSDate"

export default function isSunday(date: string): boolean {
  return original(toJSDate(date))
}
