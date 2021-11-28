import original from "date-fns/formatDistanceToNow"

import {stringToDate} from "./_lib/transform"
import type {Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  addSuffix?: boolean
}

export default function formatDistanceToNow(date: string, options?: Options): string {
  return original(stringToDate(date), options)
}
