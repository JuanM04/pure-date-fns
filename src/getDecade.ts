import original from "date-fns/getDecade"

import {stringToDate} from "./_lib/transform"

export default function getDecade(date: string): number {
  return original(stringToDate(date))
}
