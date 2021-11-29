import original from "date-fns/formatISODuration"

import type {Duration} from "../_lib/types"

export default function formatISODuration(duration: Duration): string {
  return original(duration)
}
