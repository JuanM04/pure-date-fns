import original from "date-fns/endOfYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function endOfYear(date: string): string {
  return dateToString(original(stringToDate(date)))
}
