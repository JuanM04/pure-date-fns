import original from "date-fns/set"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export interface Values {
  year?: number
  month?: number
  date?: number
}

export default function set(date: string, values: Values): string {
  return fromJSDate(original(toJSDate(date), values))
}
