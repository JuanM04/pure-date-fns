import original from "date-fns/eachWeekOfInterval"

import {dateToString, intervalToDateInterval} from "./_lib/transform"
import type {Day, Interval, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function eachWeekOfInterval(interval: Interval, options?: Options): string[] {
  return original(intervalToDateInterval(interval), options).map(dateToString)
}
