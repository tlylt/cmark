import { Token } from './Token';

export interface Scannable {
  scan(raw: string): Token;
}

export class Scanner implements Scannable {
  tokenTypes: {
    [key: string]: string;
  } = {
    _: 'UNDERSCORE',
    '*': 'STAR',
    '\n': 'NEWLINE',
  };
  scan(raw: string): Token {
    const char = raw[0];
    const type = this.tokenTypes[char];
    if (type) {
      return new Token(type, char);
    }
    return Token.null();
  }
}

export class TextScanner extends Scanner {
  scan(raw: string): Token {
    let result = '';
    for (const char of raw) {
      if (this.tokenTypes[char]) {
        break;
      }
      result += char;
    }
    return new Token('TEXT', result);
  }
}
