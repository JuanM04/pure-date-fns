import original from "date-fns/startOfISOWeek"

import {dateToString, stringToDate} from "./_lib/transform"

export default function startOfISOWeek(date: string): string {
  return dateToString(original(stringToDate(date)))
}
