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

export default function fromJSDate(date: Date): string {
  if (!(date instanceof Date)) {
    throw new TypeError("The date has to be of type 'Date'")
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [zeros(year, 4), zeros(month, 2), zeros(day, 2)].join("-")
}
