import original from "date-fns/addWeeks"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function addWeeks(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
