# is-ascii-control-char

[![npm version](https://img.shields.io/npm/v/is-ascii-control-char.svg)](https://www.npmjs.com/package/is-ascii-control-char)
[![Build Status](https://travis-ci.com/shinnn/is-ascii-control-char.svg?branch=master)](https://travis-ci.com/shinnn/is-ascii-control-char)
[![codecov](https://codecov.io/gh/shinnn/is-changelog-path/branch/master/graph/badge.svg)](https://codecov.io/gh/shinnn/is-changelog-path)

Check if a given value is one of the ASCII control characters

```javascript
import isAsciiControlChar from 'is-ascii-control-char';

isAsciiControlChar('\n'); //=> true
isAsciiControlChar('a'); //=> false
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install is-ascii-control-char
```

## API

```javascript
import isAsciiControlChar from 'is-ascii-control-char';
```

### isAsciiControlChar(*character*)

*character*: `string`  
Return: `boolean`

It returns `true` if the argument is a single-character `string` with an ASCII control character, otherwise returns `false`.

```javascript
// Returns `true`
isAsciiControlChar('\t');
isAsciiControlCharCode('\u007f');

// Returns `false`
isAsciiControlCharCode('A');
isAsciiControlCharCode('\t\t');
isAsciiControlCharCode('');
isAsciiControlCharCode(['non-string', 'argument']);
isAsciiControlCharCode();
```

## Related project

[is-ascii-control-char-code](https://github.com/shinnn/is-ascii-control-char-code) - Check a character code instead of a character

## License

Copyright (c) 2016 - 2019 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
