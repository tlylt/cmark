import { Node } from '../parser/Node';
import { Visitor } from './Visitor';

export class BoldVisitor implements Visitor {
  visit(node: Node) {
    return `<strong>${node.value}</strong>`;
  }
}
