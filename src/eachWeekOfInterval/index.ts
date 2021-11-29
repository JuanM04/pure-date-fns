import original from "date-fns/eachWeekOfInterval"

import {intervalToDateInterval} from "../_lib/intervalToDateInterval"
import type {Day, Interval, Locale} from "../_lib/types"
import fromJSDate from "../fromJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function eachWeekOfInterval(interval: Interval, options?: Options): string[] {
  return original(intervalToDateInterval(interval), options).map(fromJSDate)
}
