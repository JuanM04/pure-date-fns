import original from "date-fns/parseISO"

import fromJSDate from "../fromJSDate"

export interface Options {
  additionalDigits?: 0 | 1 | 2
}

export default function parseISO(argument: string, options?: Options): string {
  return fromJSDate(original(argument, options))
}
