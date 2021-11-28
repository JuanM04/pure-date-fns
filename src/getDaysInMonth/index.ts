import original from "date-fns/getDaysInMonth"

import toJSDate from "./toJSDate"

export default function getDaysInMonth(date: string): number {
  return original(toJSDate(date))
}
