import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { BoldParser } from './BoldParser';
import { EmphasisParser } from './EmphasisParser';
import { TextParser } from './TextParser';

export class SentenceParser extends BaseParser {
  match(tokenList: TokenList) {
    return BaseParser.matchFirst(tokenList, [
      new EmphasisParser(),
      new BoldParser(),
      new TextParser(),
    ]);
  }
}
