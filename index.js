var flyd = require('flyd')

module.exports = function (stream$) {
  return flyd.combine(function (s$, self) {
    self(s$())
    self.end(true);
  }, [stream$])
}
