import ogAddQuarters from "date-fns/addQuarters"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addQuarters(date: string, amount: number): string {
  return dateToString(ogAddQuarters(stringToDate(date), amount))
}
