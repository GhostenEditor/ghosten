import { Point } from '@angular/cdk/drag-drop';

export interface ConnectionDrawing {
  start: Point;
  end: Point;
}

export class Connection {
  constructor(public input: Socket, public output: Socket) {}
}

export class Socket {
  node: Node;
  connections: Connection[] = [];
  element: HTMLElement;

  constructor(public type: 'input' | 'output', public name: string) {}

  addConnection(connection: Connection) {
    this.connections.push(connection);
  }

  removeConnection(connection: Connection) {
    const index = this.connections.indexOf(connection);
    if (index === -1) return;
    this.connections.splice(index, 1);
  }
}

export abstract class Node {
  name: string = 'something';
  position: Point = { x: 0, y: 0 };
  inputs: Socket[] = [];
  outputs: Socket[] = [];

  constructor() {
    this.build();
  }

  abstract build(): void;

  // if (position) {
  //   this.position = position;
  // }
  // this.inputs = [];
  // this.outputs = [];

  addInput(input: Socket) {
    if (input.type !== 'input') {
      throw new Error();
    }
    this.inputs.push(input);
    input.node = this;
  }

  addOutput(output: Socket) {
    if (output.type !== 'output') {
      throw new Error();
    }
    this.outputs.push(output);
    output.node = this;
  }

  setPosition(point: Point) {
    this.position = point;
  }
}
