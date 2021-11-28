import original from "date-fns/isFuture"

import {stringToDate} from "./_lib/transform"

export default function isFuture(date: string): boolean {
  return original(stringToDate(date))
}
