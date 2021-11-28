import original from "date-fns/setYear"

import {dateToString, stringToDate} from "./_lib/transform"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export default function setYear(date: string, year: number): string {
  return dateToString(original(stringToDate(date), year))
}
