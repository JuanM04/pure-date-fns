import original from "date-fns/nextTuesday"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function nextTuesday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
