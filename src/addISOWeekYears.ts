import ogAddISOWeekYears from "date-fns/addISOWeekYears"

import {dateToString, stringToDate} from "@/lib/transform"

export default function addISOWeekYears(date: string, amount: number): string {
  return dateToString(ogAddISOWeekYears(stringToDate(date), amount))
}
