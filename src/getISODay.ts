import original from "date-fns/getISODay"

import toJSDate from "./toJSDate"

export default function getISODay(date: string): number {
  return original(toJSDate(date))
}
