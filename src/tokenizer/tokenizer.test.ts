import { Tokenizer } from './Tokenizer';
import { Token } from './Token';

describe('testing Tokenizer', () => {
  test('should tokenize empty string to EOF', () => {
    expect(new Tokenizer().tokenizeToArr('')).toEqual([Token.endOfFile()]);
  });
  test('should tokenize plain text', () => {
    expect(new Tokenizer().tokenizeToArr('Hello World')).toEqual([
      new Token('TEXT', 'Hello World'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize underscore', () => {
    expect(new Tokenizer().tokenizeToArr('_Hello World_')).toEqual([
      new Token('UNDERSCORE', '_'),
      new Token('TEXT', 'Hello World'),
      new Token('UNDERSCORE', '_'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize star', () => {
    expect(new Tokenizer().tokenizeToArr('*Hello World*')).toEqual([
      new Token('STAR', '*'),
      new Token('TEXT', 'Hello World'),
      new Token('STAR', '*'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize hash', () => {
    expect(new Tokenizer().tokenizeToArr('# Hello World')).toEqual([
      new Token('HASH', '#'),
      new Token('TEXT', ' Hello World'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize newline', () => {
    expect(new Tokenizer().tokenizeToArr('Hello World\n')).toEqual([
      new Token('TEXT', 'Hello World'),
      new Token('NEWLINE', '\n'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize combined sentence', () => {
    expect(new Tokenizer().tokenizeToArr('_Hello World_ **You**')).toEqual([
      new Token('UNDERSCORE', '_'),
      new Token('TEXT', 'Hello World'),
      new Token('UNDERSCORE', '_'),
      new Token('TEXT', ' '),
      new Token('STAR', '*'),
      new Token('STAR', '*'),
      new Token('TEXT', 'You'),
      new Token('STAR', '*'),
      new Token('STAR', '*'),
      Token.endOfFile(),
    ]);
  });
});
