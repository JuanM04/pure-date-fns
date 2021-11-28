import original from "date-fns/eachWeekendOfMonth"

import {dateToString, stringToDate} from "./_lib/transform"

export default function eachWeekendOfMonth(date: string): string[] {
  return original(stringToDate(date)).map(dateToString)
}
