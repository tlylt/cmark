export class Token {
  public type: string;
  public value: string;
  public constructor(type: string, value: string) {
    this.type = type;
    this.value = value;
  }

  static endOfFile(): Token {
    return new Token('EOF', '');
  }

  static null(): Token {
    return new Token('NULL', '');
  }

  isNull(): boolean {
    return this.type === 'NULL';
  }

  public toString(): string {
    return this.type + ' ' + this.value;
  }
}
