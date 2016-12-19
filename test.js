'use strict';

const isAsciiControllChar = require('.');
const test = require('tape');

test('isAsciiControllChar', t => {
  t.strictEqual(
    isAsciiControllChar('\u001f'),
    true,
    'should return true when it takes an ASCII control character.'
  );

  t.strictEqual(
    isAsciiControllChar(1),
    false,
    'should return false when it takes a non-string value.'
  );

  t.strictEqual(
    isAsciiControllChar('a'),
    false,
    'should return false when it takes a normal ASCII character.'
  );

  t.strictEqual(
    isAsciiControllChar(''),
    false,
    'should return false when it takes an empty string.'
  );

  t.strictEqual(
    isAsciiControllChar('\u0000\u0001'),
    false,
    'should return false when it takes more that two characters.'
  );

  t.end();
});
