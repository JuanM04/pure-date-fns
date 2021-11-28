import original from "date-fns/parse"

import type {Day, Locale} from "./_types"
import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

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
  return fromJSDate(original(dateString, formatString, toJSDate(referenceDate), options))
}
