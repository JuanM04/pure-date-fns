import original from "date-fns/getISOWeek"

import toJSDate from "../toJSDate"

export default function getISOWeek(date: string): number {
  return original(toJSDate(date))
}
