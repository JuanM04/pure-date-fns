import original from "date-fns/formatDistanceStrict"

import type {Locale} from "./_types"
import toJSDate from "./toJSDate"

export interface Options {
  locale?: Locale
  addSuffix?: boolean
  unit?: "day" | "month" | "year"
  roundingMethod?: "floor" | "ceil" | "round"
}

export default function formatDistanceStrict(
  date: string,
  baseDate: string,
  options?: Options
): string {
  return original(toJSDate(date), toJSDate(baseDate), options)
}
