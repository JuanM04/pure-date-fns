import original from "date-fns/getDaysInYear"

import toJSDate from "./toJSDate"

export default function getDaysInYear(date: string): number {
  return original(toJSDate(date))
}
