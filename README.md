# pure-date-fns

A wrapper of [date-fns](https://www.npmjs.com/package/date-fns) to work with dates without time (`yyyy-MM-dd`).

> `date-fns` version: 2.28.0

## Installation

You can install it with NPM or Yarn:

```bash
npm install --save pure-date-fns
yarn add pure-date-fns
```

It comes with TypeScript typings.

## Usage

The same described by the [date-fns documentation](https://date-fns.org/docs/Getting-Started) with one major difference: instead of passing and receiving `Date`, this library works with `string` in the form of `yyyy-MM-dd`.

```js
// Support for ES Modules (tree-shakeable)
import {add} from "pure-date-fns"
import add from "pure-date-fns/add"

// Support for CommonJS
const {add} = require("pure-date-fns")
const add = require("pure-date-fns/add")

// The same API you are familiar with

add("2020-01-28", {days: 6}) //=> "2020-02-03"
add("2020-01-28", {months: 2}) //=> "2020-03-28"
```

Also, all the functions related to time (like `addHours`, `startOfDay`, etc) were removed.

Lastly, there are two extra utilities to help you convert between JavaScript dates and string dates: `fromJSDate` and `toJSDate`.

```js
import {fromJSDate, toJSDate} from "pure-date-fns"

fromJSDate(new Date(2020, 2, 17)) //=> "2020-03-17"
toJSDate("2021-09-21") //=> new Date("2021-09-21T00:00:00")
```

## Contributing

Useful commands:

```bash
# Install the dependencies
yarn install

# Build the package
yarn build

# Publish Yalc
./scripts/yalc.sh

# Build and publish NPM
./scripts/publish.sh
```
