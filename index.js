
module.exports = Error

var http = require('http')
var global = (function() { return this })()

// I want it to be named "Error" in all stack traces
// (since it's going to appear there a lot)
function Error(message, a, b) {
  var err = new global.Error(message, a, b)
  err.__proto__ = Error.prototype
  return err
}

require('util').inherits(global.Error, Error)

// chaining setter for "status"
Error.prototype.http = function(status) {
  this.status = status

  if (!this.message && http.STATUS_CODES.hasOwnProperty(status)) {
    this.message = http.STATUS_CODES[status]
  }

  return this
}

// set output like "Error 404: message" instead of "Error: message"
Error.prototype.toString = function() {
  var ret = 'Error'
  if (Number(this.status) >= 200 && Number(this.status) < 600) {
    ret += ' ' + this.status
  }
  ret += ': ' + this.message
  return ret
}

