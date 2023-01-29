import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { Node } from './Node';

export class EmphasisParser extends BaseParser {
  match(tokenList: TokenList) {
    if (
      !tokenList.validateAny(
        ['UNDERSCORE', 'TEXT', 'UNDERSCORE'],
        ['STAR', 'TEXT', 'STAR']
      )
    ) {
      return Node.null();
    }
    return new Node('EMPHASIS', tokenList.second.value, 3);
  }
}
