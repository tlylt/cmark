import { Token } from './Token';

export class TokenList {
  constructor(public tokens: Token[]) {}

  // make TokenList iterable like an array
  [Symbol.iterator]() {
    return this.tokens[Symbol.iterator]();
  }

  public validateAny(...typeSequences: string[][]) {
    for (const typeSequence of typeSequences) {
      if (this.validate(...typeSequence)) {
        return true;
      }
    }
    return false;
  }

  // strictly same sequence of tokens
  public validate(...typeSequence: string[]) {
    if (typeSequence.length > this.tokens.length) {
      return false;
    }
    return typeSequence.every((type, i) => type === this.tokens[i].type);
  }

  public validateFrom(start: number, ...typeSequence: string[]) {
    return this.offset(start).validate(...typeSequence);
  }

  // grab the first n tokens
  public grab(amount: number): Token[] {
    if (amount > this.tokens.length) {
      throw new Error('Invalid amount requested');
    }
    return this.tokens.splice(0, amount);
  }

  // grab the token list from the start index
  public offset(start: number): TokenList {
    return start === 0 ? this : new TokenList(this.tokens.slice(start));
  }

  public get length() {
    return this.tokens.length;
  }

  public get first() {
    return this.tokens[0];
  }

  public get second() {
    return this.tokens[1];
  }

  public get third() {
    return this.tokens[2];
  }

  public toString() {
    return (
      '[\n\t' +
      this.tokens.map((token) => token.toString()).join(',\n\t') +
      '\n]'
    );
  }
}
