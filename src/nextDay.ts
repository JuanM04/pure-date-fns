import original from "date-fns/nextDay"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Day} from "./_lib/types"

export default function nextDay(date: string, day: Day): string {
  return dateToString(original(stringToDate(date), day))
}
