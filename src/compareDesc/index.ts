import original from "date-fns/compareDesc"

import toJSDate from "../toJSDate"

export default function compareDesc(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
