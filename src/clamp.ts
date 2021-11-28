import original from "date-fns/clamp"

import {dateToString, intervalToDateInterval, stringToDate} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function clamp(date: string, interval: Interval): string {
  return dateToString(original(stringToDate(date), intervalToDateInterval(interval)))
}
