import original from "date-fns/subYears"

import {dateToString, stringToDate} from "./_lib/transform"

export default function subYears(date: string, amount: number): string {
  return dateToString(original(stringToDate(date), amount))
}
