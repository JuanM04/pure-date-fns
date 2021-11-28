import original from "date-fns/subBusinessDays"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function subBusinessDays(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
