import original from "date-fns/setYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setYear(date: string, year: number): string {
  return dateToString(original(stringToDate(date), year))
}
