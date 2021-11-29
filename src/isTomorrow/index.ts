import original from "date-fns/isTomorrow"

import toJSDate from "../toJSDate"

export default function isTomorrow(date: string): boolean {
  return original(toJSDate(date))
}
