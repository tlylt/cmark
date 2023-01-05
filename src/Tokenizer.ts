import { Scannable } from './Scanner';
import { Token } from './Token';

export class Tokenizer {
  scanners: Scannable[];

  constructor(scanners: Scannable[]) {
    this.scanners = scanners;
  }

  tokenize(raw: string): Token[] {
    if (raw === '') {
      return [Token.endOfFile()];
    } else {
      const token = this.scanOneToken(raw);
      return [token].concat(this.tokenize(raw.substring(token.value.length)));
    }
  }

  scanOneToken(raw: string) {
    for (const scanner of this.scanners) {
      const token = scanner.scan(raw);
      if (!token.isNull()) {
        return token;
      }
    }
    throw new Error('no scanner can scan the input');
  }
}
