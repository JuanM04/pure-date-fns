import {dateToString, stringToDate} from "../src/_lib/transform"

test("dateToString", () => {
  expect(dateToString(new Date(2020, 0, 1))).toBe("2020-01-01")
  expect(dateToString(new Date(2020, 10, 28))).toBe("2020-11-28")
  expect(() => {
    // @ts-expect-error testing for a wrong type
    dateToString("not a date")
  }).toThrow()
})

test("stringToDate", () => {
  expect(stringToDate("2020-11-28")).toEqual(new Date(2020, 10, 28))
  expect(() => {
    // @ts-expect-error testing for a wrong type
    stringToDate(42)
  }).toThrow()
  expect(() => {
    stringToDate("invalid")
  }).toThrow()
})
