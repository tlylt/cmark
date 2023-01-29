import { Node } from '../parser/Node';
import { SentenceVisitor } from './SentenceVisitor';

export class ParagraphVisitor {
  visit(node: Node) {
    return `<p>${this.sentencesFor(node)}</p>`;
  }

  private sentencesFor(node: Node) {
    return (node.value as Node[])
      .map((sentence: Node) => new SentenceVisitor().visit(sentence))
      .join('');
  }
}
