import original from "date-fns/getISOWeekYear"

import toJSDate from "./toJSDate"

export default function getISOWeekYear(date: string): number {
  return original(toJSDate(date))
}
