import original from "date-fns/startOfDecade"

import {dateToString, stringToDate} from "./_lib/transform"

export default function startOfDecade(date: string): string {
  return dateToString(original(stringToDate(date)))
}
