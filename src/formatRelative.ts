import original from "date-fns/formatRelative"

import type {Day, Locale} from "./_types"
import toJSDate from "./toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function formatRelative(date: string, baseDate: string, options?: Options): string {
  return original(toJSDate(date), toJSDate(baseDate), options)
}
