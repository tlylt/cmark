import { Node } from '../parser/Node';

export interface Visitor {
  visit(node: Node): string;
}
