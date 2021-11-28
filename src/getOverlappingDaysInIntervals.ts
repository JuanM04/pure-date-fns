import original from "date-fns/getOverlappingDaysInIntervals"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"

export default function getOverlappingDaysInIntervals(
  intervalLeft: Interval,
  intervalRight: Interval
): number {
  return original(intervalToDateInterval(intervalLeft), intervalToDateInterval(intervalRight))
}
