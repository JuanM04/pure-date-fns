import original from "date-fns/formatDistanceToNow"

import type {Locale} from "./_types"
import toJSDate from "./toJSDate"

export interface Options {
  locale?: Locale
  addSuffix?: boolean
}

export default function formatDistanceToNow(date: string, options?: Options): string {
  return original(toJSDate(date), options)
}
