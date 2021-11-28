import original from "date-fns/isSaturday"

import toJSDate from "./toJSDate"

export default function isSaturday(date: string): boolean {
  return original(toJSDate(date))
}
