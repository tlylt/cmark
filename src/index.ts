import { Scanner, TextScanner } from './Scanner';
import { Tokenizer } from './Tokenizer';

export class CMark {
  tokenizer: Tokenizer = new Tokenizer([new Scanner(), new TextScanner()]);
  public tokenize(raw: string) {
    return this.tokenizer.tokenize(raw);
  }
}

console.log(new CMark().tokenize('_Foo_ **bar**'));
