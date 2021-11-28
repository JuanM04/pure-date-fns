import original from "date-fns/previousFriday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function previousFriday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
