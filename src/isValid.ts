import original from "date-fns/isValid"

import {stringToDate} from "./_lib/transform"
import isDate from "./isDate"

export default function isValid(date: unknown): date is string {
  if (!isDate(date)) return false

  return original(stringToDate(date))
}
