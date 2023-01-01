import { Node, Socket } from './node';

export class AAA extends Node {
  override build() {
    const input = new Socket('input', 'assad');
    const output = new Socket('output', 'asdas');
    this.addInput(input);
    this.addOutput(output);
  }
}
