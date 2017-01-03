# Flyd-once
[![Build Status](https://travis-ci.org/bertofer/flyd-once.svg?branch=master)](https://travis-ci.org/bertofer/flyd-once)

Once stream for Flyd

## Usage
```javascript
var stream$ = flyd.stream()
var once$ = once(stream$)
var result = []
flyd.on(function (val) {
  result.push(val)
}, once$)

stream$(1)
stream$(2)

assert.deepEqual(result.length, 1)
assert.deepEqual(result, [1])
```