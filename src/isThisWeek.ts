import original from "date-fns/isThisWeek"

import type {Day, Locale} from "./_types"
import toJSDate from "./toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function isThisWeek(date: string, options?: Options): boolean {
  return original(toJSDate(date), options)
}
