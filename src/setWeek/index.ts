import original from "date-fns/setWeek"

import type {Day, Locale} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export default function setWeek(date: string, week: number, options?: Options): string {
  return fromJSDate(original(toJSDate(date), week, options))
}
