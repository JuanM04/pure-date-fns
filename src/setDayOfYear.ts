import original from "date-fns/setDayOfYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setDayOfYear(date: string, dayOfYear: number): string {
  return dateToString(original(stringToDate(date), dayOfYear))
}
