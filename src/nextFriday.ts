import original from "date-fns/nextFriday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function nextFriday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
