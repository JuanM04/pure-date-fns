import original from "date-fns/isPast"

import {stringToDate} from "./_lib/transform"

export default function isPast(date: string): boolean {
  return original(stringToDate(date))
}
