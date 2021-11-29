import original from "date-fns/isWithinInterval"

import {intervalToDateInterval} from "../_lib/intervalToDateInterval"
import type {Interval} from "../_lib/types"
import toJSDate from "../toJSDate"

export default function isWithinInterval(date: string, interval: Interval): boolean {
  return original(toJSDate(date), intervalToDateInterval(interval))
}
