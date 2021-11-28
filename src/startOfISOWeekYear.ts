import original from "date-fns/startOfISOWeekYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function startOfISOWeekYear(date: string): string {
  return dateToString(original(stringToDate(date)))
}
