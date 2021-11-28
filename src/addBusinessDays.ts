import ogAddBusinessDays from "date-fns/addBusinessDays"

import {dateToString, stringToDate} from "@/lib/transform"

export default function addBusinessDays(date: string, amount: number): string {
  return dateToString(ogAddBusinessDays(stringToDate(date), amount))
}
