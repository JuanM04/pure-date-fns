import original from "date-fns/endOfISOWeek"

import {dateToString, stringToDate} from "./_lib/transform"

export default function endOfISOWeek(date: string): string {
  return dateToString(original(stringToDate(date)))
}
