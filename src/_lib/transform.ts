const dateRegex = /^\d{4}-\d{2}-\d{2}$/
import type {Interval as OgInterval} from "date-fns"

import type {Interval} from "./types"

function zeros(n: number, len: number) {
  if (!Number.isInteger(n)) {
    throw new TypeError("The number has to be an integer")
  }

  let str = n.toString()
  while (str.length < len) {
    str = "0" + str
  }

  return str
}

export function stringToDate(str: string): Date {
  if (typeof str !== "string") {
    throw new TypeError("The date has to be of type 'string'")
  }

  if (!str.match(dateRegex)) {
    throw new Error("The date has to be of type 'YYYY-MM-DD'")
  }

  return new Date(`${str}T00:00:00`)
}

export function dateToString(date: Date): string {
  if (!(date instanceof Date)) {
    throw new TypeError("The date has to be of type 'Date'")
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [zeros(year, 4), zeros(month, 2), zeros(day, 2)].join("-")
}

export const intervalToDateInterval = (interval: Interval): OgInterval => ({
  start: stringToDate(interval.start),
  end: stringToDate(interval.end),
})
