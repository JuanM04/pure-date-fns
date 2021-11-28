import ogAddWeeks from "date-fns/addWeeks"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addWeeks(date: string, amount: number): string {
  return dateToString(ogAddWeeks(stringToDate(date), amount))
}
