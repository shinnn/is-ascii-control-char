# is-ascii-control-char

[![NPM version](https://img.shields.io/npm/v/is-ascii-control-char.svg)](https://www.npmjs.com/package/is-ascii-control-char)
[![Bower version](https://img.shields.io/bower/v/is-ascii-control-char.svg)](https://github.com/shinnn/is-ascii-control-char/releases)
[![Build Status](https://travis-ci.org/shinnn/is-ascii-control-char.svg?branch=master)](https://travis-ci.org/shinnn/is-ascii-control-char)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-ascii-control-char.svg)](https://coveralls.io/r/shinnn/is-ascii-control-char)
[![dependencies Status](https://david-dm.org/shinnn/is-ascii-control-char/status.svg)](https://david-dm.org/shinnn/is-ascii-control-char)
[![devDependencies Status](https://david-dm.org/shinnn/is-ascii-control-char/dev-status.svg)](https://david-dm.org/shinnn/is-ascii-control-char?type=dev)

Check if a given value is one of the ASCII control characters

```javascript
import isAsciiControlChar from 'is-ascii-control-char';

isAsciiControlChar('\n'); //=> true
isAsciiControlChar('a'); //=> false
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install is-ascii-control-char
```

### [Bower](https://bower.io/)

```
bower install is-ascii-control-char
```

## API

```javascript
import isAsciiControlChar from 'is-ascii-control-char';
```

### isAsciiControlChar(*character*)

*character*: `String`  
Return: `Boolean`

It returns `true` if the argument is a single-character string with an ASCII control character, otherwise returns `false`.

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

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
