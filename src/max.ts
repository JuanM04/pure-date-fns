import original from "date-fns/max"

import {dateToString, stringToDate} from "./_lib/transform"

export default function max(datesArray: string[]): string {
  return dateToString(original(datesArray.map(stringToDate)))
}
