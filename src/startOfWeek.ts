import original from "date-fns/startOfWeek"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function startOfWeek(date: string, options?: Options): string {
  return dateToString(original(stringToDate(date), options))
}
