import original from "date-fns/getISOWeekYear"

import {stringToDate} from "./_lib/transform"

export default function getISOWeekYear(date: string): number {
  return original(stringToDate(date))
}
