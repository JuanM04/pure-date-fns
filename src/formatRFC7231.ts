import original from "date-fns/formatRFC7231"

import {stringToDate} from "./_lib/transform"

export default function formatRFC7231(date: string): string {
  return original(stringToDate(date))
}
