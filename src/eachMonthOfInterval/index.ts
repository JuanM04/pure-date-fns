import original from "date-fns/eachMonthOfInterval"

import {intervalToDateInterval} from "../_lib/intervalToDateInterval"
import type {Interval} from "../_lib/types"
import fromJSDate from "../fromJSDate"

export default function eachMonthOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(fromJSDate)
}
