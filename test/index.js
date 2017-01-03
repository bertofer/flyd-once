var flyd = require('flyd')
var once = require('../')
var assert = require('assert')

describe('once', function () {
  it('Should only be executed once', function () {
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
  })
})
