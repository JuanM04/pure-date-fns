import original from "date-fns/subQuarters"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function subQuarters(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
