import original from "date-fns/subQuarters"

import {dateToString, stringToDate} from "./_lib/transform"

export default function subQuarters(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
