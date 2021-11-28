import original from "date-fns/isFriday"

import toJSDate from "./toJSDate"

export default function isFriday(date: string): boolean {
  return original(toJSDate(date))
}
