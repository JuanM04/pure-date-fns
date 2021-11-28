import original from "date-fns/setQuarter"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function setQuarter(date: string, quarter: number): string {
  return fromJSDate(original(toJSDate(date), quarter))
}
