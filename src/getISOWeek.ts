import original from "date-fns/getISOWeek"

import {stringToDate} from "./_lib/transform"

export default function getISOWeek(date: string): number {
  return original(stringToDate(date))
}
