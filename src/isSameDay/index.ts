import original from "date-fns/isSameDay"

import toJSDate from "./toJSDate"

export default function isSameDay(dateLeft: string, dateRight: string): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
