import type {Duration as OgDuration} from "date-fns"

export type Duration = Omit<OgDuration, "hours" | "minutes" | "seconds">
export type Interval = {start: string; end: string}
