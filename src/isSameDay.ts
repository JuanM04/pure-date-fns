import original from "date-fns/isSameDay"

import {stringToDate} from "./_lib/transform"

export default function isSameDay(dateLeft: string, dateRight: string): boolean {
  return original(stringToDate(dateLeft), stringToDate(dateRight))
}
