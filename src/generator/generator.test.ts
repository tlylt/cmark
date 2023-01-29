import { Generator } from './Generator';
import { Token } from '../tokenizer/Token';
import { TokenList } from '../tokenizer/TokenList';
import { Node } from '../parser/Node';

let tokenList: TokenList;
describe('testing generator', () => {
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
  test('should genertate', () => {
    const simpleNode = new Node(
      'ROOT',
      [new Node('SENTENCE_AND_EOF', [new Node('TEXT', 'Hello World', 1)], 2)],
      2
    );
    expect(new Generator().generate(simpleNode)).toEqual('<p>Hello World</p>');
  });
});
