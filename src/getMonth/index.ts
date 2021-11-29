import original from "date-fns/getMonth"

import toJSDate from "../toJSDate"

export default function getMonth(date: string): number {
  return original(toJSDate(date))
}
