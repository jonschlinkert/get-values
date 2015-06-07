'use strict';

/* deps: mocha */
var assert = require('assert');
var values = require('./');

describe('values', function () {
  it('should return an array of values from the given object:', function () {
    assert.deepEqual(values({a: 'aaa', b: 'bbb', c: 'ccc'}), ['aaa', 'bbb', 'ccc']);
  });
});
