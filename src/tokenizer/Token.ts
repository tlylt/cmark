enum TokenType {
  TEXT = 'TEXT',
  NULL = 'NULL',
  EOF = 'EOF',
  UNDERSCORE = 'UNDERSCORE',
  STAR = 'STAR',
  NEWLINE = 'NEWLINE',
}

// TokenType Reverse Lookup
export const TokenTypeLookup: { [key: string]: TokenType } = {
  _: TokenType.UNDERSCORE, // inline
  '*': TokenType.STAR, // inline
  '\n': TokenType.NEWLINE,
};

export class Token {
  public constructor(public type: string, public value: string) {}

  isNull(): boolean {
    return this.type === TokenType.NULL;
  }

  get length(): number {
    return this.value.length;
  }

  static endOfFile(): Token {
    return new Token(TokenType.EOF, '');
  }

  static null(): Token {
    return new Token(TokenType.NULL, '');
  }

  static text(content: string): Token {
    return new Token(TokenType.TEXT, content);
  }

  public toString(): string {
    return `Token(${this.type}, ${this.value})`;
  }
}
