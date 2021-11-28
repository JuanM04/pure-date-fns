import type {Interval as OriginalInterval} from "date-fns"

import isDate from "../isDate"
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
  if (!isDate(str)) {
    throw new TypeError("Invalid date format")
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

export const intervalToDateInterval = (interval: Interval): OriginalInterval => ({
  start: stringToDate(interval.start),
  end: stringToDate(interval.end),
})
