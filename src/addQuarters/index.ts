import original from "date-fns/addQuarters"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function addQuarters(date: string, amount: number): string {
  return fromJSDate(original(toJSDate(date), amount))
}
