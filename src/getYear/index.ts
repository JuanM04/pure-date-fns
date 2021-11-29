import original from "date-fns/getYear"

import toJSDate from "../toJSDate"

export default function getYear(date: string): number {
  return original(toJSDate(date))
}
