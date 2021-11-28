import original from "date-fns/getDay"

import {stringToDate} from "./_lib/transform"
import type {Day} from "./_lib/types"

export default function getDay(date: string): Day {
  return original(stringToDate(date))
}
