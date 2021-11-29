import original from "date-fns/setISODay"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function setISODay(date: string, day: number): string {
  return fromJSDate(original(toJSDate(date), day))
}
