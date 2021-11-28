import original from "date-fns/isWeekend"

import toJSDate from "./toJSDate"

export default function isWeekend(date: string): boolean {
  return original(toJSDate(date))
}
