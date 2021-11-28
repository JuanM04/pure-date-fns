import fromJSDate from "../src/fromJSDate"
import toJSDate from "../src/toJSDate"

test("fromJSDate", () => {
  expect(fromJSDate(new Date(2020, 0, 1))).toBe("2020-01-01")
  expect(fromJSDate(new Date(2020, 10, 28))).toBe("2020-11-28")
  expect(() => {
    // @ts-expect-error testing for a wrong type
    fromJSDate("not a date")
  }).toThrow()
})

test("toJSDate", () => {
  expect(toJSDate("2020-11-28")).toEqual(new Date(2020, 10, 28))
  expect(() => {
    // @ts-expect-error testing for a wrong type
    toJSDate(42)
  }).toThrow()
  expect(() => {
    toJSDate("invalid")
  }).toThrow()
})
