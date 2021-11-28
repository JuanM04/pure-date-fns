import original from "date-fns/min"

import {dateToString, stringToDate} from "./_lib/transform"

export default function min(datesArray: string[]): string {
  return dateToString(original(datesArray.map(stringToDate)))
}
