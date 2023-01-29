import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { Node } from './Node';
import { SentenceParser } from './SentenceParser';

export class SentenceAndNewlineParser extends BaseParser {
  match(tokenList: TokenList) {
    const { matchedNodes, tokenLength } = BaseParser.matchZeroOrMore(
      tokenList,
      new SentenceParser()
    );
    if (matchedNodes.length === 0) {
      return Node.null();
    }
    if (!tokenList.validateFrom(tokenLength, 'NEWLINE', 'NEWLINE')) {
      return Node.null();
    }
    return new Node('SENTENCE_AND_NEWLINE', matchedNodes, tokenLength + 2);
  }
}
