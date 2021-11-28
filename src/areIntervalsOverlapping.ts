import ogAreIntervalsOverlapping from "date-fns/areIntervalsOverlapping"

import {intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function areIntervalsOverlapping(
  intervalLeft: Interval,
  intervalRight: Interval,
  options?: {
    inclusive?: boolean | undefined
  }
): boolean {
  return ogAreIntervalsOverlapping(
    intervalToDateInterval(intervalLeft),
    intervalToDateInterval(intervalRight),
    options
  )
}
