import original from "date-fns/setYear"

import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function setYear(date: string, year: number): string {
  return fromJSDate(original(toJSDate(date), year))
}
