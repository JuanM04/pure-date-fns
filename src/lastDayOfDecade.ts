import original from "date-fns/lastDayOfDecade"

import {dateToString, stringToDate} from "./_lib/transform"

export default function lastDayOfDecade(date: string): string {
  return dateToString(original(stringToDate(date)))
}
