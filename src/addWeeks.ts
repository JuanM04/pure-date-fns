import original from "date-fns/addWeeks"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addWeeks(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
