import original from "date-fns/isSameWeek"

import {stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function isSameWeek(
  dateLeft: string,
  dateRight: string,
  options?: Options
): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight), options)
}
