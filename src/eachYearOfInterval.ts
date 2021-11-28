import original from "date-fns/eachYearOfInterval"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"
import fromJSDate from "./fromJSDate"

export default function eachYearOfInterval(interval: Interval): string[] {
  return original(intervalToDateInterval(interval)).map(fromJSDate)
}
