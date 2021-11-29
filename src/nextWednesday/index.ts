import original from "date-fns/nextWednesday"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function nextWednesday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
