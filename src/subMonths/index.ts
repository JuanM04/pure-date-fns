import original from "date-fns/subMonths"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function subMonths(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
