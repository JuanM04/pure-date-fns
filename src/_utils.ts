import type {Interval as OriginalInterval} from "date-fns"

import type {Interval} from "./_types"
import toJSDate from "./toJSDate"

export const intervalToDateInterval = (interval: Interval): OriginalInterval => ({
  start: toJSDate(interval.start),
  end: toJSDate(interval.end),
})
