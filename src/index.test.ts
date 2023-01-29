import { CMark } from './index';
import { Token } from './tokenizer/Token';
import { TokenList } from './tokenizer/TokenList';

describe('testing index file', () => {
  test('should tokenize empty string to EOF', () => {
    expect(new CMark().tokenize('')).toEqual(
      new TokenList([Token.endOfFile()])
    );
  });
});
