import original from "date-fns/formatISO9075"

import {stringToDate} from "./_lib/transform"

export interface Options {
  format?: "extended" | "basic"
  representation?: "complete" | "date" | "time"
}

export default function formatISO9075(date: string, options?: Options): string {
  return original(stringToDate(date), options)
}
