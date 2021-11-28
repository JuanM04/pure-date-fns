import original from "date-fns/addISOWeekYears"

import {dateToString, stringToDate} from "./_lib/transform"

export default function addISOWeekYears(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
