import original from "date-fns/subISOWeekYears"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function subISOWeekYears(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
