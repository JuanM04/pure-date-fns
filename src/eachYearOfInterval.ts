import original from "date-fns/eachYearOfInterval"

import {dateToString, intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function eachYearOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(dateToString)
}
