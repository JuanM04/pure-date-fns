import original from "date-fns/clamp"

import type {Interval} from "./_types"
import {fromJSDate, intervalToDateInterval} from "./_utils"
import toJSDate from "./toJSDate"

export default function clamp(date: string, interval: Interval): string {
  return fromJSDate(original(toJSDate(date), intervalToDateInterval(interval)))
}
