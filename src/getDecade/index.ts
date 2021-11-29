import original from "date-fns/getDecade"

import toJSDate from "../toJSDate"

export default function getDecade(date: string): number {
  return original(toJSDate(date))
}
