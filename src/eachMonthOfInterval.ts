import original from "date-fns/eachMonthOfInterval"

import {dateToString, intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function eachMonthOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(dateToString)
}
