import original from "date-fns/lastDayOfYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function lastDayOfYear(date: string): string {
  return dateToString(original(stringToDate(date)))
}
