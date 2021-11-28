import original from "date-fns/eachQuarterOfInterval"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"
import fromJSDate from "./fromJSDate"

export default function eachQuarterOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(fromJSDate)
}
