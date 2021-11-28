import original from "date-fns/lightFormat"

import {stringToDate} from "./_lib/transform"

export default function lightFormat(date: string, format: string): string {
  return original(stringToDate(date), format)
}
