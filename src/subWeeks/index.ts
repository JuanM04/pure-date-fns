import original from "date-fns/subWeeks"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function subWeeks(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
