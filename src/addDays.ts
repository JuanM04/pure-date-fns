import original from "date-fns/addDays"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function addDays(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
