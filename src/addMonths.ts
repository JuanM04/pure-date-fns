import original from "date-fns/addMonths"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function addMonths(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
