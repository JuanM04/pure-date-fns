import original from "date-fns/isLastDayOfMonth"

import toJSDate from "../toJSDate"

export default function isLastDayOfMonth(date: string): boolean {
  return original(toJSDate(date))
}
