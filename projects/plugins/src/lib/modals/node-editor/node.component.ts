import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { ConnectionService } from './connection.service';
import { Node } from './node';

@Component({
  selector: 'node-editor-item',
  template: ` <div class="card rete-node position-absolute" cdkDrag (cdkDragMoved)="cdkDragMoved()">
    <div class="card-header">{{ node.name }}</div>
    <div class="card-body" *ngIf="node.outputs.length">
      <div class="output text-end" *ngFor="let output of node.outputs">
        <span class="card-title">{{ output.name }}</span>
        <div class="socket output" nodeSocket [socket]="output"></div>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item position-static" *ngFor="let input of node.inputs">
        <div class="socket input" nodeSocket [socket]="input"></div>
        <div class="d-inline-block">
          <div class="input-title">{{ input.name }}</div>
        </div>
      </li>
    </ul>
  </div>`,
  host: {
    '(contextmenu)': 'contextmenuEvent.emit($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeComponent implements OnInit {
  @ViewChild(CdkDrag, { static: true }) cdkDrag: CdkDrag;
  @Output() contextmenuEvent = new EventEmitter();

  constructor(protected cdr: ChangeDetectorRef, public node: Node, protected connectionService: ConnectionService) {}

  ngOnInit() {
    this.cdkDrag.setFreeDragPosition(this.node.position);
    // this.service.setBindings(this.bindSocket, this.bindControl);
  }

  selected() {
    // return this.editor.selected.contains(this.node) ? 'selected' : '';
  }

  cdkDragMoved() {
    this.connectionService.nodeDragging.next(null);
  }
}
