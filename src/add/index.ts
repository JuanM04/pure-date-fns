import original from "date-fns/add"

import type {Duration} from "./_types"
import fromJSDate from "./fromJSDate"
import toJSDate from "./toJSDate"

export default function add(date: string, duration: Duration): string {
  return fromJSDate(original(toJSDate(date), duration))
}
