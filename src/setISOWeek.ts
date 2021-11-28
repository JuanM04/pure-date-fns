import original from "date-fns/setISOWeek"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setISOWeek(date: string, isoWeek: number): string {
  return dateToString(original(stringToDate(date), isoWeek))
}
