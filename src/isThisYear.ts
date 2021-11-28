import original from "date-fns/isThisYear"

import toJSDate from "./toJSDate"

export default function isThisYear(date: string): boolean {
  return original(toJSDate(date))
}
