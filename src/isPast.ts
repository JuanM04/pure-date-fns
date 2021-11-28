import original from "date-fns/isPast"

import toJSDate from "./toJSDate"

export default function isPast(date: string): boolean {
  return original(toJSDate(date))
}
