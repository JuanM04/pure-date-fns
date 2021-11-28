import original from "date-fns/subDays"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function subDays(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
