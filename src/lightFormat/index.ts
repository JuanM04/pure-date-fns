import original from "date-fns/lightFormat"

import toJSDate from "../toJSDate"

export default function lightFormat(date: string, format: string): string {
  return original(toJSDate(date), format)
}
