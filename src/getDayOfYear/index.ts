import original from "date-fns/getDayOfYear"

import toJSDate from "../toJSDate"

export default function getDayOfYear(date: string): number {
  return original(toJSDate(date))
}
