import original from "date-fns/startOfYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function startOfYear(date: string): string {
  return dateToString(original(stringToDate(date)))
}
