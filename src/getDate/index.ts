import original from "date-fns/getDate"

import toJSDate from "./toJSDate"

export default function getDate(date: string): number {
  return original(toJSDate(date))
}
