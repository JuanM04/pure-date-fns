import original from "date-fns/startOfQuarter"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function startOfQuarter(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
