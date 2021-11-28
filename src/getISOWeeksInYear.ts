import original from "date-fns/getISOWeeksInYear"

import toJSDate from "./toJSDate"

export default function getISOWeeksInYear(date: string): number {
  return original(toJSDate(date))
}
