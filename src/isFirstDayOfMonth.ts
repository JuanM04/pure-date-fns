import original from "date-fns/isFirstDayOfMonth"

import toJSDate from "./toJSDate"

export default function isFirstDayOfMonth(date: string): boolean {
  return original(toJSDate(date))
}
