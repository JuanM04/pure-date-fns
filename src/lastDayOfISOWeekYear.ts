import original from "date-fns/lastDayOfISOWeekYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function lastDayOfISOWeekYear(date: string): string {
  return dateToString(original(stringToDate(date)))
}
