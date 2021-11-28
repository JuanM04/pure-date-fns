import original from "date-fns/formatDistance"

import {stringToDate} from "./_lib/transform"
import type {Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  addSuffix?: boolean
}

export default function formatDistance(date: string, baseDate: string, options?: Options): string {
  return original(stringToDate(date), stringToDate(baseDate), options)
}
