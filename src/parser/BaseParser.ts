import { TokenList } from '../tokenizer/TokenList';
import { Node } from './Node';

export abstract class BaseParser {
  abstract match(tokenList: TokenList): Node;

  // Only return one node, the first one that matches
  static matchFirst(tokenList: TokenList, parsers: BaseParser[]): Node {
    for (const parser of parsers) {
      const node = parser.match(tokenList);
      if (!node.isNull()) {
        return node;
      }
    }
    return Node.null();
  }

  // Return all nodes that match a single parser
  static matchZeroOrMore(
    tokenList: TokenList,
    parser: BaseParser
  ): {
    matchedNodes: Node[];
    tokenLength: number;
  } {
    const matchedNodes = [];
    let tokenLength = 0;
    while (true) {
      const node = parser.match(tokenList.offset(tokenLength));
      if (node.isNull()) {
        break;
      }
      matchedNodes.push(node);
      tokenLength += node.tokenLength;
    }
    return { matchedNodes, tokenLength };
  }
}
