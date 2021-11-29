import original from "date-fns/clamp"

import {intervalToDateInterval} from "../_lib/intervalToDateInterval"
import type {Interval} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function clamp(date: string, interval: Interval): string {
  return fromJSDate(original(toJSDate(date), intervalToDateInterval(interval)))
}
