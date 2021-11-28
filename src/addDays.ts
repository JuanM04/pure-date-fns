import ogAddDays from "date-fns/addDays"

import {dateToString, stringToDate} from "@/lib/transform"

export default function addDays(date: string, amount: number): string {
  return dateToString(ogAddDays(stringToDate(date), amount))
}
