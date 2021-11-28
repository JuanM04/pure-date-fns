import original from "date-fns/isTuesday"

import toJSDate from "./toJSDate"

export default function isTuesday(date: string): boolean {
  return original(toJSDate(date))
}
