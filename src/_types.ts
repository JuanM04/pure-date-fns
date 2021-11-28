import type {Day, Duration as OriginalDuration, Locale} from "date-fns"

export type Duration = Omit<OriginalDuration, "hours" | "minutes" | "seconds">
export type Interval = {start: string; end: string}
export type {Day, Locale}
