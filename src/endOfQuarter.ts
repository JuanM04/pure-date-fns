import original from "date-fns/endOfQuarter"

import {dateToString, stringToDate} from "./_lib/transform"

export default function endOfQuarter(date: string): string {
  return dateToString(original(stringToDate(date)))
}
