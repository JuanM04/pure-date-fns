import original from "date-fns/lastDayOfWeek"

import type {Day, Locale} from "./_types"
import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function lastDayOfWeek(date: string, options?: Options): string {
  return fromJSDate(original(toJSDate(date), options))
}
