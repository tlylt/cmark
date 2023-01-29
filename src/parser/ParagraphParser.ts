import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { Node } from './Node';
import { SentenceAndEofParser } from './SentenceAndEofParser';
import { SentenceAndNewlineParser } from './SentenceAndNewlineParser';

export class ParagraphParser extends BaseParser {
  match(tokenList: TokenList): Node {
    return BaseParser.matchFirst(tokenList, [
      new SentenceAndNewlineParser(),
      new SentenceAndEofParser(),
    ]);
  }
}
