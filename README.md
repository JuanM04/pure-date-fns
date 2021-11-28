# pure-date-fns

A wrapper of [date-fns](https://www.npmjs.com/package/date-fns) to work with dates without time (`yyyy-MM-dd`).

> `date-fns` version: 2.26.0

## Installation

You can install it with NPM or Yarn:

```bash
npm install --save pure-date-fns
yarn add pure-date-fns
```

It comes with TypeScript typings.

## Usage

The same described by the [date-fns documentation](https://date-fns.org/docs/Getting-Started) with one major difference: instead of passing and receiving `Date`, this library works with `string` in the form of `yyyy-MM-dd`.

Also, all the functions related to time (like `addHours`, `startOfDay`, etc) were removed.

Lastly, there are two extra utilities to help you convert between JavaScript dates and string dates: `fromJSDate` and `toJSDate`
