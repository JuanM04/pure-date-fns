import original from "date-fns/previousMonday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function previousMonday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
