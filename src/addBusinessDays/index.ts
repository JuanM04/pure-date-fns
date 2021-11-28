import original from "date-fns/addBusinessDays"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function addBusinessDays(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
