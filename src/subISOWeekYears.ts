import original from "date-fns/subISOWeekYears"

import {dateToString, stringToDate} from "./_lib/transform"

export default function subISOWeekYears(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
