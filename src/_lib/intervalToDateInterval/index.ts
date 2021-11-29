import type {Interval as OriginalInterval} from "date-fns"

import toJSDate from "../../toJSDate"
import type {Interval} from "../types"

export const intervalToDateInterval = (interval: Interval): OriginalInterval => ({
  start: toJSDate(interval.start),
  end: toJSDate(interval.end),
})
