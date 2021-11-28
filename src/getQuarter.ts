import original from "date-fns/getQuarter"

import {stringToDate} from "./_lib/transform"

export default function getQuarter(date: string): number {
  return original(stringToDate(date))
}
