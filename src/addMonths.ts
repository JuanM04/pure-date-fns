import ogAddMonths from "date-fns/addMonths"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addMonths(date: string, amount: number): string {
  return dateToString(ogAddMonths(stringToDate(date), amount))
}
