import original from "date-fns/formatRelative"

import {stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function formatRelative(date: string, baseDate: string, options?: Options): string {
  return original(stringToDate(date), stringToDate(baseDate), options)
}
