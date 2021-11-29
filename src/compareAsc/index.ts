import original from "date-fns/compareAsc"

import toJSDate from "../toJSDate"

export default function compareAsc(dateLeft: string, dateRight: string): number {
  return original(toJSDate(dateLeft), toJSDate(dateRight))
}
