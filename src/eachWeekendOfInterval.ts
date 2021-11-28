import original from "date-fns/eachWeekendOfInterval"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"
import fromJSDate from "./fromJSDate"

export default function eachWeekendOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(fromJSDate)
}
