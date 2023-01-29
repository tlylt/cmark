import { Token, TokenTypeLookup } from './Token';

export interface Scanner {
  scan(raw: string): Token;
}

// Consumes text until it finds a special character
export class TextScanner implements Scanner {
  scan(raw: string): Token {
    let result = '';
    for (const char of raw.split('')) {
      if (TokenTypeLookup[char]) {
        break;
      }
      result += char;
    }
    return Token.text(result);
  }
}

export class SimpleScanner implements Scanner {
  scan(raw: string): Token {
    if (raw.length === 0 || !TokenTypeLookup[raw[0]]) {
      return Token.null();
    }
    const char = raw[0];
    return new Token(TokenTypeLookup[char], char);
  }
}

// For other tokens, may need to create new scanner classes to handle cases such
// as # which needs to have a space after it to be a header
// also for things like ```, [], the two characters need to be together to be
// a token
