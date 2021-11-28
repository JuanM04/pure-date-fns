import original from "date-fns/nextTuesday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function nextTuesday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
