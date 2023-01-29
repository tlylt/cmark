import { Node } from '../parser/Node';
import { BodyVisitor } from './BodyVisitor';

export class Generator {
  generate(node: Node): string {
    return new BodyVisitor().visit(node);
  }
}
