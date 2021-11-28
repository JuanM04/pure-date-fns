import original from "date-fns/isAfter"

import {stringToDate} from "./_lib/transform"

export default function isAfter(date: string, dateToCompare: string): boolean {
  return original(stringToDate(date), stringToDate(dateToCompare))
}
