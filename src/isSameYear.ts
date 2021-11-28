import original from "date-fns/isSameYear"

import {stringToDate} from "./_lib/transform"

export default function isSameYear(dateLeft: string, dateRight: string): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
