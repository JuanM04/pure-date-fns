import original from "date-fns/getISODay"

import {stringToDate} from "./_lib/transform"

export default function getISODay(date: string): number {
  return original(stringToDate(date))
}
