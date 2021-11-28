import original from "date-fns/getDate"

import {stringToDate} from "./_lib/transform"

export default function getDate(date: string): number {
  return original(stringToDate(date))
}
