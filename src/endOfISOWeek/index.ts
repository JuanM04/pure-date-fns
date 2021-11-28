import original from "date-fns/endOfISOWeek"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function endOfISOWeek(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
