import { TokenList } from '../tokenizer/TokenList';
import { BodyParser } from './BodyParser';
import { Node } from './Node';

export class Parser {
  parse(tokenList: TokenList): Node {
    const root = new BodyParser().match(tokenList);
    if (root.tokenLength !== tokenList.length) {
      throw new Error(`Parse error: ${root} ${root.tokenLength}`);
    }
    return root;
  }

  static traverse(node: Node) {
    console.log(node);
    if (node.value instanceof Array) {
      node.value.forEach((child: Node) => this.traverse(child));
    }
  }
}
