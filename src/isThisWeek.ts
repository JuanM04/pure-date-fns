import original from "date-fns/isThisWeek"

import {stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function isThisWeek(date: string, options?: Options): boolean {
  return original(stringToDate(date), options)
}
