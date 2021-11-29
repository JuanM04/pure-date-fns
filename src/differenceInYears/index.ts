import original from "date-fns/differenceInYears"

import toJSDate from "../toJSDate"

export default function differenceInYears(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
