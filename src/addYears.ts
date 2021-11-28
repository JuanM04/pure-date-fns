import original from "date-fns/addYears"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function addYears(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
