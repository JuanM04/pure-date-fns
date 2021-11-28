import original from "date-fns/previousTuesday"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function previousTuesday(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
