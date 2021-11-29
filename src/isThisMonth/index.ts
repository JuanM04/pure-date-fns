import original from "date-fns/isThisMonth"

import toJSDate from "../toJSDate"

export default function isThisMonth(date: string): boolean {
  return original(toJSDate(date))
}
