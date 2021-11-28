import original from "date-fns/endOfMonth"

import {dateToString, stringToDate} from "./_lib/transform"

export default function endOfMonth(date: string): string {
  return dateToString(original(stringToDate(date)))
}
