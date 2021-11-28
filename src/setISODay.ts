import original from "date-fns/setISODay"

import {dateToString, stringToDate} from "./_lib/transform"

export default function setISODay(date: string, day: number): string {
  return dateToString(original(stringToDate(date), day))
}
