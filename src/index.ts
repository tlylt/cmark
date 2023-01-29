import { Node } from './parser/Node';
import { Parser } from './parser/Parser';
import { Generator } from './generator/Generator';
import { Tokenizer } from './tokenizer/Tokenizer';
import { TokenList } from './tokenizer/TokenList';

export class CMark {
  tokenizer: Tokenizer = new Tokenizer();
  public tokenize(raw: string) {
    return this.tokenizer.tokenize(raw);
  }
  public parse(tokenList: TokenList): Node {
    return new Parser().parse(tokenList);
  }
}

const tokenizeResult = new CMark().tokenize(
  '__Foo__ and *text*.\n\nAnother para.'
);
console.log('🚀 ~ file: index.ts:11 ~ tokenizeResult', tokenizeResult);
const parseResult = new CMark().parse(tokenizeResult);
console.log('🚀 ~ file: index.ts:19 ~ parseResult', parseResult);
// Parser.traverse(parseResult);
const generateResult = new Generator().generate(parseResult);
console.log('🚀 ~ file: index.ts:25 ~ generateResult', generateResult);
