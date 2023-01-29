import { TokenList } from '../tokenizer/TokenList';
import { BaseParser } from './BaseParser';
import { Node } from './Node';

export class TextParser extends BaseParser {
  match(tokenList: TokenList) {
    if (!tokenList.validate('TEXT')) {
      return Node.null();
    }
    return new Node('TEXT', tokenList.first.value, 1);
  }
}
