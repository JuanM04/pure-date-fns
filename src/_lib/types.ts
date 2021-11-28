import type {Day, Duration as OriginalDuration, Interval, Locale} from "date-fns"

export type Duration = Omit<OriginalDuration, "hours" | "minutes" | "seconds">
export type {Day, Interval, Locale}
