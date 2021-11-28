import original from "date-fns/previousMonday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function previousMonday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
