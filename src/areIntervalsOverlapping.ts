import original from "date-fns/areIntervalsOverlapping"

import {intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export interface Options {
  inclusive?: boolean | undefined
}

export default function areIntervalsOverlapping(
  intervalLeft: Interval,
  intervalRight: Interval,
  options?: Options
): boolean {
  return original(
    intervalToDateInterval(intervalLeft),
    intervalToDateInterval(intervalRight),
    options
  )
}
