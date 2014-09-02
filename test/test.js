var Error = require('../')
var assert = require('assert')

it('should preserve error [[Class]]', function() {
  assert.equal(Object.prototype.toString.call(Error('blah')), '[object Error]')
})

it('should set `status` property', function() {
  assert.equal(Error('blah').http(404).status, 404)
})

