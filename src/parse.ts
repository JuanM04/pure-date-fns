import original from "date-fns/parse"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

export default function parse(
  dateString: string,
  formatString: string,
  referenceDate: string,
  options?: Options
): string {
  return dateToString(original(dateString, formatString, stringToDate(referenceDate), options))
}
