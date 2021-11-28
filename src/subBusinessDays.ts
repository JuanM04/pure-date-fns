import original from "date-fns/subBusinessDays"

import {dateToString, stringToDate} from "./_lib/transform"

export default function subBusinessDays(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
