import { Node } from '../parser/Node';
import { ParagraphVisitor } from './ParagraphVisitor';
import { Visitor } from './Visitor';

export class BodyVisitor implements Visitor {
  visit(node: Node) {
    const paragraphs = node.value as Node[];
    return paragraphs
      .map((paragraph) => new ParagraphVisitor().visit(paragraph))
      .join('');
  }
}
