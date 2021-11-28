import original from "date-fns/endOfISOWeekYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function endOfISOWeekYear(date: string): string {
  return dateToString(original(stringToDate(date)))
}
