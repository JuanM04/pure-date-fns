import original from "date-fns/nextFriday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function nextFriday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
