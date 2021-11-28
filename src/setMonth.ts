import original from "date-fns/setMonth"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function setMonth(date: string, month: number): string {
  return fromJSDate(original(toJSDate(date), month))
}
