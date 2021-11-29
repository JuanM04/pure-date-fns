import original from "date-fns/eachQuarterOfInterval"

import {intervalToDateInterval} from "../_lib/intervalToDateInterval"
import type {Interval} from "../_lib/types"
import fromJSDate from "../fromJSDate"

export default function eachQuarterOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(fromJSDate)
}
