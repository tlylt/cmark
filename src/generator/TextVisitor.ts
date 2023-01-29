import { Node } from '../parser/Node';
import { Visitor } from './Visitor';

export class TextVisitor implements Visitor {
  visit(node: Node) {
    return node.value as string;
  }
}
