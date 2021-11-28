import original from "date-fns/formatDuration"

import type {Duration, Locale} from "./_types"

export interface Options {
  locale?: Locale
  format?: (keyof Duration)[]
  zero?: boolean
  delimiter?: string
}

export default function formatDuration(duration: Duration, options?: Options): string {
  return original(duration, options)
}
