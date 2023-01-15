import { Directive, EventEmitter, Injector, Input, IterableDiffers, Output, ViewContainerRef } from '@angular/core';

import { ConnectionsComponent } from './connections.component';
import { Node } from './node';
import { NodeComponent } from './node.component';

@Directive({ selector: '[nodeEditorCanvas]' })
export class NodeEditorCanvasDirective {
  private _nodes: Node[];
  private diff = this.iterableDiffers.find([]).create<Node>();

  @Input() get nodes() {
    return this._nodes;
  }

  set nodes(nodes: Node[]) {
    this._nodes = nodes;
    this.change();
  }

  @Output() contextmenuEvent = new EventEmitter();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private iterableDiffers: IterableDiffers,
    private injector: Injector,
  ) {
    this.viewContainerRef.createComponent(ConnectionsComponent, {
      injector: this.injector,
    });
  }

  private change() {
    const change = this.diff.diff(this.nodes);
    if (change) {
      change.forEachOperation(({ previousIndex, item }, adjustedPreviousIndex, currentIndex) => {
        if (previousIndex === null) {
          this.insert(item, currentIndex!);
        } else if (currentIndex === null) {
          this.remove(adjustedPreviousIndex!);
        } else if (adjustedPreviousIndex !== null) {
          this.move(adjustedPreviousIndex, currentIndex);
        }
      });
    }
  }

  private insert(node: Node, index: number) {
    const componentRef = this.viewContainerRef.createComponent(NodeComponent, {
      index,
      injector: Injector.create({
        parent: this.injector,
        providers: [
          {
            provide: Node,
            useValue: node,
          },
        ],
      }),
    });
    componentRef.instance.contextmenuEvent.subscribe(event => this.contextmenuEvent.emit(event));
  }

  private move(lastIndex: number, currentIndex: number) {
    this.viewContainerRef.move(this.viewContainerRef.get(lastIndex)!, currentIndex);
  }

  private remove(index: number) {
    this.viewContainerRef.remove(index);
  }
}
