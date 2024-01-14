import {
  Strategy,
  TextTokenizationStrategy,
  SpecialCharTokenizationStrategy,
} from './Strategy';
import { Token } from './Token';
import { TokenList } from './TokenList';

export class Tokenizer {
  strategies: Strategy[] = [
    new SpecialCharTokenizationStrategy(), // order matters
    new TextTokenizationStrategy(),
  ];

  /**
   * Tokenize into a TokenList, which is an abstraction over an array of tokens
   * providing some convenience methods
   */
  tokenize(raw: string): TokenList {
    return new TokenList(this.tokenizeToArr(raw));
  }

  /**
   * Tokenize into an array of tokens
   */
  tokenizeToArr(raw: string): Token[] {
    if (raw === '') {
      return [Token.endOfFile()];
    }
    const token = this.tokenizeOneToken(raw);
    const rest = raw.substring(token.length);
    return [token].concat(this.tokenizeToArr(rest));
  }

  tokenizeOneToken(raw: string): Token {
    for (const strategy of this.strategies) {
      const token = strategy.tokenize(raw);
      if (!token.isNull()) {
        return token;
      }
    }
    throw new Error(`No strategy found for ${raw}`);
  }
}
