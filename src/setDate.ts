import original from "date-fns/setDate"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setDate(date: string, dayOfMonth: number): string {
  return dateToString(original(stringToDate(date), dayOfMonth))
}
