import original from "date-fns/getDaysInMonth"

import {stringToDate} from "./_lib/transform"

export default function getDaysInMonth(date: string): number {
  return original(stringToDate(date))
}
