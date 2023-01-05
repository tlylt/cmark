import { CMark } from './index';
import { Token } from './Token';

describe('testing index file', () => {
  test('should tokenize empty string to EOF', () => {
    expect(new CMark().tokenize('')).toEqual([Token.endOfFile()]);
  });
  test('should tokenize plain text', () => {
    expect(new CMark().tokenize('Hello World')).toEqual([
      new Token('TEXT', 'Hello World'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize underscore', () => {
    expect(new CMark().tokenize('_Hello World_')).toEqual([
      new Token('UNDERSCORE', '_'),
      new Token('TEXT', 'Hello World'),
      new Token('UNDERSCORE', '_'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize star', () => {
    expect(new CMark().tokenize('*Hello World*')).toEqual([
      new Token('STAR', '*'),
      new Token('TEXT', 'Hello World'),
      new Token('STAR', '*'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize newline', () => {
    expect(new CMark().tokenize('Hello World\n')).toEqual([
      new Token('TEXT', 'Hello World'),
      new Token('NEWLINE', '\n'),
      Token.endOfFile(),
    ]);
  });
  test('should tokenize combined sentence', () => {
    expect(new CMark().tokenize('_Hello World_ **You**')).toEqual([
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
