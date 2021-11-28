import original from "date-fns/eachWeekOfInterval"

import type {Day, Interval, Locale} from "./_types"
import {intervalToDateInterval} from "./_utils"
import fromJSDate from "./fromJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function eachWeekOfInterval(interval: Interval, options?: Options): string[] {
  return original(intervalToDateInterval(interval), options).map(fromJSDate)
}
