import original from "date-fns/startOfYear"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function startOfYear(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
