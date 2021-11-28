import original from "date-fns/endOfDecade"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function endOfDecade(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
