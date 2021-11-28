import original from "date-fns/isBefore"

import {stringToDate} from "./_lib/transform"

export default function isBefore(date: string, dateToCompare: string): boolean {
  return original(stringToDate(date), stringToDate(dateToCompare))
}
