import original from "date-fns/getDayOfYear"

import {stringToDate} from "./_lib/transform"

export default function getDayOfYear(date: string): number {
  return original(stringToDate(date))
}
