import original from "date-fns/setWeekYear"

import type {Day, Locale} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export default function setWeekYear(date: string, weekYear: number, options?: Options): string {
  return fromJSDate(original(toJSDate(date), weekYear, options))
}
