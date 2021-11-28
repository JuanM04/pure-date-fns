import original from "date-fns/addDays"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addDays(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
