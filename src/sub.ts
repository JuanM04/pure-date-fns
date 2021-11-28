import original from "date-fns/sub"

import type {Duration} from "./_types"
import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function sub(date: string, duration: Duration): string {
  return fromJSDate(original(toJSDate(date), duration))
}
