import original from "date-fns/isWednesday"

import {stringToDate} from "./_lib/transform"

export default function isWednesday(date: string): boolean {
  return original(stringToDate(date))
}
