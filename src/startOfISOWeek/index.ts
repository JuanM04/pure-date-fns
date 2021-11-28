import original from "date-fns/startOfISOWeek"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function startOfISOWeek(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
