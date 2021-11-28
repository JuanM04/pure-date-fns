import original from "date-fns/eachQuarterOfInterval"

import {dateToString, intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function eachQuarterOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(dateToString)
}
