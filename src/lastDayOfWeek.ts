import original from "date-fns/lastDayOfWeek"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}
export default function lastDayOfWeek(date: string, options?: Options): string {
  return dateToString(original(stringToDate(date), options))
}
