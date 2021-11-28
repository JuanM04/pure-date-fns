import original from "date-fns/eachDayOfInterval"

import {dateToString, intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export interface Options {
  step?: number
}

export default function eachDayOfInterval(interval: Interval, options?: Options): string[] {
  return original(intervalToDateInterval(interval), options).map(dateToString)
}
