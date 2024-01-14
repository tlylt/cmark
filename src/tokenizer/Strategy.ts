import { Token, TokenTypeLookup } from './Token';

export interface Strategy {
  tokenize(raw: string): Token;
}

/**
 * Consume text until you find a special character
 * Return the text as a token
 */
export class TextTokenizationStrategy implements Strategy {
  tokenize(raw: string): Token {
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

/**
 * Consume a special character
 * Return the special character as a token
 */
export class SpecialCharTokenizationStrategy implements Strategy {
  tokenize(raw: string): Token {
    if (raw.length === 0 || !TokenTypeLookup[raw[0]]) {
      return Token.null();
    }
    const char = raw[0];
    return new Token(TokenTypeLookup[char], char);
  }
}
