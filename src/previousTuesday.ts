import original from "date-fns/previousTuesday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function previousTuesday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
