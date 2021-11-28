import original from "date-fns/setISOWeekYear"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setISOWeekYear(date: string, isoWeekYear: number): string {
  return dateToString(original(stringToDate(date), isoWeekYear))
}
