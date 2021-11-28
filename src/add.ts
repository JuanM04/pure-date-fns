import ogAdd from "date-fns/add"

import {dateToString, stringToDate} from "@/lib/transform"
import type {Duration} from "@/lib/types"

export default function add(date: string, duration: Duration): string {
  return dateToString(ogAdd(stringToDate(date), duration))
}
