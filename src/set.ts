import original from "date-fns/set"

import {dateToString, stringToDate} from "./_lib/transform"

export interface Values {
  year?: number
  month?: number
  date?: number
}

export default function set(date: string, values: Values): string {
  return dateToString(original(stringToDate(date), values))
}
