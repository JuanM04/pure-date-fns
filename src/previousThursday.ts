import original from "date-fns/previousThursday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function previousThursday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
