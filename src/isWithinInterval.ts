import original from "date-fns/isWithinInterval"

import {intervalToDateInterval, stringToDate} from "./_lib/transform"
import type {Interval} from "./_lib/types"

export default function isWithinInterval(date: string, interval: Interval): boolean {
  return original(stringToDate(date), intervalToDateInterval(interval))
}
