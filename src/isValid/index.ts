import original from "date-fns/isValid"

import isDate from "../isDate"
import toJSDate from "../toJSDate"

export default function isValid(date: unknown): date is string {
  if (!isDate(date)) return false

  return original(toJSDate(date))
}
