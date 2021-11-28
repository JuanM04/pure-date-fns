import original from "date-fns/lastDayOfMonth"

import {dateToString, stringToDate} from "./_lib/transform"

export default function lastDayOfMonth(date: string): string {
  return dateToString(original(stringToDate(date)))
}
