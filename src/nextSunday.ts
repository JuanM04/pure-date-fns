import original from "date-fns/nextSunday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function nextSunday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
