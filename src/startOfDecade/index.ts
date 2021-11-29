import original from "date-fns/startOfDecade"

import fromJSDate from "../fromJSDate"
import toJSDate from "../toJSDate"

export default function startOfDecade(date: string): string {
  return fromJSDate(original(toJSDate(date)))
}
