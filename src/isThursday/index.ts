import original from "date-fns/isThursday"

import toJSDate from "../toJSDate"

export default function isThursday(date: string): boolean {
  return original(toJSDate(date))
}
