var Error = require('../')
var assert = require('assert')

it('should preserve error [[Class]]', function() {
  assert.equal(Object.prototype.toString.call(Error('blah')), '[object Error]')
})

it('should set `status` property', function() {
  assert.equal(Error('blah').http(404).status, 404)
})

it('should create default message if not present', function() {
  assert.equal(Error().http(418).message, "I'm a teapot")
})

