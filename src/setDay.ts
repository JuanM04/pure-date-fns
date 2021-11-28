import original from "date-fns/setDay"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Day, Locale} from "./_lib/types"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function setDay(date: string, day: number, options?: Options): string {
  return dateToString(original(stringToDate(date), day, options))
}
