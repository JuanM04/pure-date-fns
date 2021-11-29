import original from "date-fns/setDate"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function setDate(date: string, dayOfMonth: number): string {
  return fromJSDate(original(toJSDate(date), dayOfMonth))
}
