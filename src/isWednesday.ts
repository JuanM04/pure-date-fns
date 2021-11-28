import original from "date-fns/isWednesday"

import toJSDate from "./toJSDate"

export default function isWednesday(date: string): boolean {
  return original(toJSDate(date))
}
