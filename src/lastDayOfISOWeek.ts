import original from "date-fns/lastDayOfISOWeek"

import {dateToString, stringToDate} from "./_lib/transform"

export default function lastDayOfISOWeek(date: string): string {
  return dateToString(original(stringToDate(date)))
}
