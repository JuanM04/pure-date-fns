import original from "date-fns/isToday"

import toJSDate from "./toJSDate"

export default function isToday(date: string): boolean {
  return original(toJSDate(date))
}
