import original from "date-fns/isTomorrow"

import {stringToDate} from "./_lib/transform"

export default function isTomorrow(date: string): boolean {
  return original(stringToDate(date))
}
