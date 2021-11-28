import original from "date-fns/formatRFC3339"

import toJSDate from "./toJSDate"

export interface Options {
  fractionDigits?: 0 | 1 | 2 | 3
}

export default function formatRFC3339(date: string, options?: Options): string {
  return original(toJSDate(date), options)
}
