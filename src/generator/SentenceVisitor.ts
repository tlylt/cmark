import { Node } from '../parser/Node';
import { BoldVisitor } from './BoldVisitor';
import { EmphasisVisitor } from './EmphasisVisitor';
import { TextVisitor } from './TextVisitor';
import { Visitor } from './Visitor';

export class SentenceVisitor {
  sentenceVisitors: { [key: string]: Visitor } = {
    BOLD: new BoldVisitor(),
    EMPHASIS: new EmphasisVisitor(),
    TEXT: new TextVisitor(),
  };

  visit(node: Node) {
    return this.visitorFor(node).visit(node);
  }

  private visitorFor(node: Node) {
    return this.sentenceVisitors[node.type];
  }
}
