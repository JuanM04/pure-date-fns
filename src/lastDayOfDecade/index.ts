import original from "date-fns/lastDayOfDecade"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function lastDayOfDecade(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
