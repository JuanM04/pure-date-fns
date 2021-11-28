import original from "date-fns/nextThursday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function nextThursday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
