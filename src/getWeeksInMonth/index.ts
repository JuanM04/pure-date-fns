import original from "date-fns/getWeeksInMonth"

import type {Day, Locale} from "./_types"
import toJSDate from "./toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function getWeeksInMonth(date: string, options?: Options): number {
  return original(toJSDate(date), options)
}
