import original from "date-fns/formatDistanceToNowStrict"

import {stringToDate} from "./_lib/transform"
import type {Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  addSuffix?: boolean
  unit?: "day" | "month" | "year"
  roundingMethod?: "floor" | "ceil" | "round"
}

export default function formatDistanceToNowStrict(date: string, options?: Options): string {
  return original(stringToDate(date), options)
}
