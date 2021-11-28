import original from "date-fns/eachWeekendOfInterval"

import {dateToString, intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function eachWeekendOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(dateToString)
}
