import original from "date-fns/getYear"

import {stringToDate} from "./_lib/transform"

export default function getYear(date: string): number {
  return original(stringToDate(date))
}
