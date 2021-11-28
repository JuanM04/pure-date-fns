import original from "date-fns/startOfMonth"

import {dateToString, stringToDate} from "./_lib/transform"

export default function startOfMonth(date: string): string {
  return dateToString(original(stringToDate(date)))
}
