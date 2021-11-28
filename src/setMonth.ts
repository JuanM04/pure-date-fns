import original from "date-fns/setMonth"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setMonth(date: string, month: number): string {
  return dateToString(original(stringToDate(date), month))
}
