import original from "date-fns/intlFormat"

import toJSDate from "../toJSDate"

export type Locale = Intl.ResolvedDateTimeFormatOptions["locale"]
export type FormatOptions = Intl.DateTimeFormatOptions
export interface LocaleOptions {
  locale: Locale | Locale[]
}

function intlFormat(date: string): string
function intlFormat(date: string, localeOptions: LocaleOptions): string
function intlFormat(date: string, formatOptions: FormatOptions): string
function intlFormat(
  date: string,
  formatOptions: FormatOptions,
  localeOptions: LocaleOptions
): string
function intlFormat(
  date: string,
  formatOrLocale?: FormatOptions | LocaleOptions,
  localeOptions?: LocaleOptions
): string {
  // @ts-expect-error formatOrLocale expects wrong type, idk why
  return original(toJSDate(date), formatOrLocale, localeOptions)
}

export default intlFormat
