import original from "date-fns/getOverlappingDaysInIntervals"

import {intervalToDateInterval} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function getOverlappingDaysInIntervals(
  intervalLeft: Interval,
  intervalRight: Interval
): number {
  return original(intervalToDateInterval(intervalLeft), intervalToDateInterval(intervalRight))
}
