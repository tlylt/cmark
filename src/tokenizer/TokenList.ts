import { Token } from './Token';

export class TokenList {
  constructor(public tokens: Token[]) {}

  /**
   * Make TokenList iterable like an array
   */
  [Symbol.iterator]() {
    return this.tokens[Symbol.iterator]();
  }

  public validateAny(...typeSequences: string[][]) {
    return typeSequences.some((typeSequence) => this.validate(...typeSequence));
  }

  /**
   * Strictly same sequence of tokens
   */
  public validate(...typeSequence: string[]) {
    if (typeSequence.length > this.tokens.length) {
      return false;
    }
    return typeSequence.every((type, i) => type === this.tokens[i].type);
  }

  public validateFrom(start: number, ...typeSequence: string[]) {
    return this.offset(start).validate(...typeSequence);
  }

  /**
   * Grab the first n tokens
   */
  public grab(amount: number): Token[] {
    if (amount > this.tokens.length) {
      throw new Error('Invalid amount requested');
    }
    return this.tokens.splice(0, amount);
  }

  /**
   * Grab the token list from the start index
   */
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
