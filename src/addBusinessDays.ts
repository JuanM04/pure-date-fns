import original from "date-fns/addBusinessDays"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addBusinessDays(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
