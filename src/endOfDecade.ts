import original from "date-fns/endOfDecade"

import {dateToString, stringToDate} from "./_lib/transform"

export default function endOfDecade(date: string): string {
  return dateToString(original(stringToDate(date)))
}
