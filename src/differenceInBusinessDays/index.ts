import original from "date-fns/differenceInBusinessDays"

import toJSDate from "./toJSDate"

export default function differenceInBusinessDays(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
