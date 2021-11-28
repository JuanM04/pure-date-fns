import original from "date-fns/setISOWeek"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function setISOWeek(date: string, isoWeek: number): string {
  return fromJSDate(original(toJSDate(date), isoWeek))
}
