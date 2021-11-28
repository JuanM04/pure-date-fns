import original from "date-fns/intervalToDuration"

import type {Duration, Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"

export default function intervalToDuration(interval: Interval): Duration {
  const result = original(intervalToDateInterval(interval))

  return {
    years: result.years,
    months: result.months,
    weeks: result.weeks,
    days: result.days,
  }
}
