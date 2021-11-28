import original from "date-fns/sub"

import {dateToString, stringToDate} from "./_lib/transform"
import type {Duration} from "./_lib/types"

export default function sub(date: string, duration: Duration): string {
  return dateToString(original(stringToDate(date), duration))
}
