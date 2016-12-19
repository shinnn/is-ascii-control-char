/*!
 * is-ascii-control-char | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-ascii-control-char
*/
import isAsciiControlCharCode from 'is-ascii-control-char-code';

export default function isAsciiControllChar(char) {
  if (typeof char !== 'string') {
    return false;
  }

  if (char.length !== 1) {
    return false;
  }

  return isAsciiControlCharCode(char.charCodeAt(0));
}
