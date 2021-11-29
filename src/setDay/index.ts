import original from "date-fns/setDay"

import type {Day, Locale} from "../_lib/types"
import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
}

export default function setDay(date: string, day: number, options?: Options): string {
  return fromJSDate(original(toJSDate(date), day, options))
}
