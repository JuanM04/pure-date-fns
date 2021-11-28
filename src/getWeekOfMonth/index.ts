import original from "date-fns/getWeekOfMonth"

import type {Day, Locale} from "./_types"
import toJSDate from "./toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function getWeekOfMonth(date: string, options?: Options): number {
  return original(toJSDate(date), options)
}
