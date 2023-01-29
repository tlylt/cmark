import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { Node } from './Node';
import { ParagraphParser } from './ParagraphParser';

export class BodyParser extends BaseParser {
  match(tokenList: TokenList): Node {
    let { matchedNodes, tokenLength } = BaseParser.matchZeroOrMore(
      tokenList,
      new ParagraphParser()
    );
    if (matchedNodes.length === 0) {
      return Node.null();
    }
    return new Node('ROOT', matchedNodes, tokenLength);
  }
}
