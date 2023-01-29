enum NodeType {
  NULL = 'NULL',
  BOLD = 'BOLD',
  EMPHASIS = 'EMPHASIS',
  TEXT = 'TEXT',
}

export class Node {
  constructor(
    public type: string,
    public value: string | Node[],
    public tokenLength: number
  ) {}

  static null() {
    return new Node('NULL', '', 0);
  }

  isNull() {
    return this.type === 'NULL';
  }

  public toString(): string {
    if (typeof this.value === 'string') {
      return `Node(${this.type}, ${this.value}, ${this.tokenLength})`;
    }
    return `Node(${this.type}, ${this.value.map(
      (node) => '\n' + node.toString()
    )}, ${this.tokenLength})\n`;
  }
}
