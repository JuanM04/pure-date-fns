import original from "date-fns/isWithinInterval"

import type {Interval} from "./_types"
import {intervalToDateInterval} from "./_utils"
import toJSDate from "./toJSDate"

export default function isWithinInterval(date: string, interval: Interval): boolean {
  return original(toJSDate(date), intervalToDateInterval(interval))
}
