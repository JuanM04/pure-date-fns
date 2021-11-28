import original from "date-fns/subDays"

import {dateToString, stringToDate} from "./_lib/transform"

export default function subDays(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
