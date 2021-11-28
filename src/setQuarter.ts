import original from "date-fns/setQuarter"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setQuarter(date: string, quarter: number): string {
  return dateToString(original(stringToDate(date), quarter))
}
