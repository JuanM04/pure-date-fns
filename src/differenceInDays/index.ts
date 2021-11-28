import original from "date-fns/differenceInDays"

import toJSDate from "./toJSDate"

export default function differenceInDays(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
