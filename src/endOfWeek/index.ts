import original from "date-fns/endOfWeek"

import type {Day, Locale} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function endOfWeek(date: string, options?: Options): string {
  return fromJSDate(original(toJSDate(date), options))
}
