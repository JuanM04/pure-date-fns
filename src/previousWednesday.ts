import original from "date-fns/previousWednesday"

import {dateToString, stringToDate} from "./_lib/transform"

export default function previousWednesday(date: string): string {
  return dateToString(original(stringToDate(date)))
}
