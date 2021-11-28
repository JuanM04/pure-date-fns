import original from "date-fns/isMonday"

import toJSDate from "./toJSDate"

export default function isMonday(date: string): boolean {
  return original(toJSDate(date))
}
