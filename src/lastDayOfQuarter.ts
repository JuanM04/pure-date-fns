import original from "date-fns/lastDayOfQuarter"

import {dateToString, stringToDate} from "./_lib/transform"

export default function lastDayOfQuarter(date: string): string {
  return dateToString(original(stringToDate(date)))
}
