import original from "date-fns/isFuture"

import toJSDate from "./toJSDate"

export default function isFuture(date: string): boolean {
  return original(toJSDate(date))
}
