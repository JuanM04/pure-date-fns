import original from "date-fns/formatDistance"

import type {Locale} from "../_lib/types"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  addSuffix?: boolean
}

export default function formatDistance(date: string, baseDate: string, options?: Options): string {
  return original(toJSDate(date), toJSDate(baseDate), options)
}
