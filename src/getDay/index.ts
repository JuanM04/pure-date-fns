import original from "date-fns/getDay"

import type {Day} from "../_lib/types"
import toJSDate from "../toJSDate"

export default function getDay(date: string): Day {
  return original(toJSDate(date))
}
