import original from "date-fns/areIntervalsOverlapping"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"

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
