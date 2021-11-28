import original from "date-fns/subYears"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function subYears(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
