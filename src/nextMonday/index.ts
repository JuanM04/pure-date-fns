import original from "date-fns/nextMonday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function nextMonday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
