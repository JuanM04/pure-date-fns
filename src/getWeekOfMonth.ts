import original from "date-fns/getWeekOfMonth"

import {stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function getWeekOfMonth(date: string, options?: Options): number {
  return original(stringToDate(date), options)
}
