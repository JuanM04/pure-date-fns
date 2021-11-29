import original from "date-fns/previousDay"

import type {Day} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function previousDay(date: string, day: Day): string {
  return fromJSDate(original(toJSDate(date), day))
}
