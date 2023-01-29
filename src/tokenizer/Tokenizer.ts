import { Scanner, SimpleScanner, TextScanner } from './Scanner';
import { Token } from './Token';
import { TokenList } from './TokenList';

export class Tokenizer {
  scanners: Scanner[] = [new SimpleScanner(), new TextScanner()];

  // Tokenize into a TokenList, which is an abstraction over an array of tokens
  // providing some convenience methods
  tokenize(raw: string): TokenList {
    return new TokenList(this.tokenizeToArr(raw));
  }

  // Tokenize into an array of tokens
  tokenizeToArr(raw: string): Token[] {
    if (raw === '') {
      return [Token.endOfFile()];
    }
    const token = this.scanOneToken(raw);
    return [token].concat(this.tokenizeToArr(raw.substring(token.length)));
  }

  scanOneToken(raw: string): Token {
    for (const scanner of this.scanners) {
      const token = scanner.scan(raw);
      if (!token.isNull()) {
        return token;
      }
    }
    throw new Error(`No scanner found for ${raw}`);
  }
}
