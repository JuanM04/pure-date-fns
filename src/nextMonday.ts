import original from "date-fns/nextMonday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function nextMonday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
