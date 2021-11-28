import original from "date-fns/previousDay"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Day} from "./_lib/types"

export default function previousDay(date: string, day: Day): string {
  return dateToString(original(stringToDate(date), day))
}
