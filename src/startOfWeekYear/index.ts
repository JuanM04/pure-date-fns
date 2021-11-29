import original from "date-fns/startOfWeekYear"

import type {Day, Locale} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export default function startOfWeekYear(date: string, options?: Options): string {
  return fromJSDate(original(toJSDate(date), options))
}
