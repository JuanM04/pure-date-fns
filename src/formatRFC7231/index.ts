import original from "date-fns/formatRFC7231"

import toJSDate from "../toJSDate"

export default function formatRFC7231(date: string): string {
  return original(toJSDate(date))
}
