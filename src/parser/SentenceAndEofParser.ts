import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { Node } from './Node';
import { SentenceParser } from './SentenceParser';

export class SentenceAndEofParser extends BaseParser {
  match(tokenList: TokenList) {
    let { matchedNodes, tokenLength } = BaseParser.matchZeroOrMore(
      tokenList,
      new SentenceParser()
    );
    if (matchedNodes.length === 0) {
      return Node.null();
    }
    if (tokenList.validateFrom(tokenLength, 'EOF')) {
      tokenLength += 1;
    } else if (tokenList.validateFrom(tokenLength, 'NEWLINE', 'EOF')) {
      tokenLength += 2;
    } else {
      return Node.null();
    }
    return new Node('SENTENCE_AND_EOF', matchedNodes, tokenLength);
  }
}
