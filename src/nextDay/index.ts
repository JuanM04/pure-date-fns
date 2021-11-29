import original from "date-fns/nextDay"

import type {Day} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function nextDay(date: string, day: Day): string {
  return fromJSDate(original(toJSDate(date), day))
}
