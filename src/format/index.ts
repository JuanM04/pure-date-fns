import original from "date-fns/format"

import type {Day, Locale} from "../_lib/types"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

export default function format(date: string, format: string, options?: Options): string {
  return original(toJSDate(date), format, options)
}
