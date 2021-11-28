import original from "date-fns/getWeek"

import {stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export default function getWeek(date: string, options?: Options): number {
  return original(stringToDate(date), options)
}
