import original from "date-fns/isThisISOWeek"

import toJSDate from "./toJSDate"

export default function isThisISOWeek(date: string): boolean {
  return original(toJSDate(date))
}
