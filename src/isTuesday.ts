import original from "date-fns/isTuesday"

import {stringToDate} from "./_lib/transform"

export default function isTuesday(date: string): boolean {
  return original(stringToDate(date))
}
