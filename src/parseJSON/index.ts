import original from "date-fns/parseJSON"

import fromJSDate from "../fromJSDate"

export default function parseJSON(argument: string): string {
  return fromJSDate(original(argument))
}
