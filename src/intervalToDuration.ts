import original from "date-fns/intervalToDuration"

import {intervalToDateInterval} from "./_lib/transform"
import type {Duration, Interval} from "./_lib/types"

export default function intervalToDuration(interval: Interval): Duration {
  const result = original(intervalToDateInterval(interval))

  return {
    years: result.years,
    months: result.months,
    weeks: result.weeks,
    days: result.days,
  }
}
