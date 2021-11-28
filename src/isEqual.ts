import original from "date-fns/isEqual"

import {stringToDate} from "./_lib/transform"

export default function isEqual(dateLeft: string, dateRight: string): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
