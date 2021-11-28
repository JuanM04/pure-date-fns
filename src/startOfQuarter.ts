import original from "date-fns/startOfQuarter"

import {dateToString, stringToDate} from "./_lib/transform"

export default function startOfQuarter(date: string): string {
  return dateToString(original(stringToDate(date)))
}
