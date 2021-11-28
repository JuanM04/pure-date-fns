import original from "date-fns/subMonths"

import {dateToString, stringToDate} from "./_lib/transform"

export default function subMonths(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
