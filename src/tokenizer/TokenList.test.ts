import { Token } from './Token';
import { TokenList } from './TokenList';

describe('testing TokenList', () => {
  let tokenList: TokenList;

  it('should have correct length', () => {
    tokenList = new TokenList([new Token('UNDERSCORE', '_')]);
    expect(tokenList.length).toBe(1);
  });
});
