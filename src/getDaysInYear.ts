import original from "date-fns/getDaysInYear"

import {stringToDate} from "./_lib/transform"

export default function getDaysInYear(date: string): number {
  return original(stringToDate(date))
}
