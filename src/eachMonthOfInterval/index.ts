import original from "date-fns/eachMonthOfInterval"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"
import fromJSDate from "./fromJSDate"

export default function eachMonthOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(fromJSDate)
}
