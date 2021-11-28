import original from "date-fns/addQuarters"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addQuarters(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
