import original from "date-fns/addISOWeekYears"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function addISOWeekYears(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
