import original from "date-fns/parseJSON"

import {dateToString} from "./_lib/transform"

export default function parseJSON(argument: string): string {
  return dateToString(original(argument))
}
