import original from "date-fns/eachDayOfInterval"

import {intervalToDateInterval} from "../_lib/intervalToDateInterval"
import type {Interval} from "../_lib/types"
import fromJSDate from "../fromJSDate"

export interface Options {
  step?: number
}

export default function eachDayOfInterval(interval: Interval, options?: Options): string[] {
  return original(intervalToDateInterval(interval), options).map(fromJSDate)
}
