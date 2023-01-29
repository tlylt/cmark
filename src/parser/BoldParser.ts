import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { Node } from './Node';

export class BoldParser extends BaseParser {
  match(tokenList: TokenList) {
    if (
      !tokenList.validateAny(
        ['UNDERSCORE', 'UNDERSCORE', 'TEXT', 'UNDERSCORE', 'UNDERSCORE'],
        ['STAR', 'STAR', 'TEXT', 'STAR', 'STAR']
      )
    ) {
      return Node.null();
    }
    return new Node('BOLD', tokenList.third.value, 5);
  }
}
