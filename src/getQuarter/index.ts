import original from "date-fns/getQuarter"

import toJSDate from "../toJSDate"

export default function getQuarter(date: string): number {
  return original(toJSDate(date))
}
