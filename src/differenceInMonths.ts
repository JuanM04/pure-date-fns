import original from "date-fns/differenceInMonths"

import toJSDate from "./toJSDate"

export default function differenceInMonths(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
