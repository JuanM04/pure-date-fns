import original from "date-fns/nextWednesday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function nextWednesday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
