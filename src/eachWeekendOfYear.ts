import original from "date-fns/eachWeekendOfYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function eachWeekendOfYear(date: string): string[] {
  return original(stringToDate(date)).map(dateToString)
}
