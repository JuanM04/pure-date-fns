import original from "date-fns/previousSunday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function previousSunday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
