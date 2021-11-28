import original from "date-fns/parseISO"

import {dateToString} from "./_lib/transform"

export interface Options {
  additionalDigits?: 0 | 1 | 2
}

export default function parseISO(argument: string, options?: Options): string {
  return dateToString(original(argument, options))
}
