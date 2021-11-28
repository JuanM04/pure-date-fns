import original from "date-fns/eachDayOfInterval"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"
import fromJSDate from "./fromJSDate"

export interface Options {
  step?: number
}

export default function eachDayOfInterval(interval: Interval, options?: Options): string[] {
  return original(intervalToDateInterval(interval), options).map(fromJSDate)
}
