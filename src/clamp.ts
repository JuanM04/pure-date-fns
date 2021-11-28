import original from "date-fns/clamp"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"
import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function clamp(date: string, interval: Interval): string {
  return fromJSDate(original(toJSDate(date), intervalToDateInterval(interval)))
}
