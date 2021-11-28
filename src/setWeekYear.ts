import original from "date-fns/setWeekYear"

import {dateToString, stringToDate} from "./_lib/transform"

export interface Options {
  locale?: Locale
  weekStartsOn?: Day
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export default function setWeekYear(date: string, weekYear: number, options?: Options): string {
  return dateToString(original(stringToDate(date), weekYear, options))
}
