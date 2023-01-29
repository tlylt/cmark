import { Node } from '../parser/Node';
import { Visitor } from './Visitor';

export class EmphasisVisitor implements Visitor {
  visit(node: Node): string {
    return `<em>${node.value}</em>`;
  }
}
