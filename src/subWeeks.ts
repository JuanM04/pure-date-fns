import original from "date-fns/subWeeks"

import {dateToString, stringToDate} from "./_lib/transform"

export default function subWeeks(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
