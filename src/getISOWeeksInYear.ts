import original from "date-fns/getISOWeeksInYear"

import {stringToDate} from "./_lib/transform"

export default function getISOWeeksInYear(date: string): number {
  return original(stringToDate(date))
}
