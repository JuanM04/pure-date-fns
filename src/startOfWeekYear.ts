import original from "date-fns/startOfWeekYear"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export default function startOfWeekYear(date: string, options?: Options): string {
  return dateToString(original(stringToDate(date), options))
}