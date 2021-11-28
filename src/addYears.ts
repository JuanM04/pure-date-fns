import ogAddYears from "date-fns/addYears"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addYears(date: string, amount: number): string {
  return dateToString(ogAddYears(stringToDate(date), amount))
}
