var flyd = require('flyd')

module.exports = function (stream$) {
  var executed = false
  return flyd.combine(function (s$, self) {
    if (!executed) {
      executed = true
      self(s$())
    }
  }, [stream$])
}
