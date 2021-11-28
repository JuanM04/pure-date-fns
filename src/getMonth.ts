import original from "date-fns/getMonth"

import {stringToDate} from "./_lib/transform"

export default function getMonth(date: string): number {
  return original(stringToDate(date))
}
