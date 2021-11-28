import original from "date-fns/nextSaturday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function nextSaturday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
