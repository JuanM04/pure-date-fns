import original from "date-fns/isSameWeek"

import type {Day, Locale} from "../_lib/types"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function isSameWeek(
  dateLeft: string,
  dateRight: string,
  options?: Options
): boolean {
  return original(toJSDate(dateLeft), toJSDate(dateRight), options)
}
