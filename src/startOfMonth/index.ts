import original from "date-fns/startOfMonth"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function startOfMonth(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
