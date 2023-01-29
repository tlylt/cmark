import { Parser } from './Parser';
import { Token } from '../tokenizer/Token';
import { TokenList } from '../tokenizer/TokenList';
import { Node } from './Node';

let tokenList: TokenList;
describe('testing parser', () => {
  beforeAll(() => {
    const tokens = [
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
    ];
    tokenList = new TokenList(tokens);
  });
  test('should tokenize text string', () => {
    const simpleList = new TokenList([
      new Token('TEXT', 'Hello World'),
      Token.endOfFile(),
    ]);
    const expectedNode = new Node(
      'ROOT',
      [new Node('SENTENCE_AND_EOF', [new Node('TEXT', 'Hello World', 1)], 2)],
      2
    );
    expect(new Parser().parse(simpleList)).toEqual(expectedNode);
  });
});
