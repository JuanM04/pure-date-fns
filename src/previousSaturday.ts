import original from "date-fns/previousSaturday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function previousSaturday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
