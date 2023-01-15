import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GtEdit } from '@ghosten/editor';

import { AAA } from './components';

interface NodeType {
  name: string;
  label?: string;
  args?: any;
}

interface NodeGroup {
  title: string;
  nodes: NodeType[];
}

@Component({
  selector: 'node-editor-component-implements',
  template: ` <gt-modal
    modalTitle="数据绑定"
    modalSize="xl"
    [modalFooter]="true"
    [fullscreen]="true"
    (confirm)="save()"
    (cancel)="cancel.emit()"
  >
    <div class="d-flex h-100">
      <gt-accordion class="flex-shrink-0 overflow-auto" style="width: 16rem;" [multi]="true">
        <gt-accordion-item *ngFor="let accordion of nodeGroups" [cardTitle]="accordion.title" [expanded]="true">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              draggable="true"
              *ngFor="let node of accordion.nodes"
              (dragstart)="dragStart($event, node)"
            >
              {{ node.label || node.name }}
            </li>
          </ul>
        </gt-accordion-item>
      </gt-accordion>
      <div
        #container
        gtPan
        [panTarget]="target"
        class="rete-container flex-grow-1 h-100 overflow-hidden"
        (dragover)="dragOver($event)"
        (drop)="drop($event)"
      >
        <div class="h-100 position-relative" #target gtZoom [zoomZone]="container">
          <ng-template nodeEditorCanvas [nodes]="nodes" (contextmenuEvent)="contextmenuEvent($event)"></ng-template>
        </div>
      </div>
    </div>
  </gt-modal>`,
})
export class NodeEditorComponent {
  @Input() originalSource: any;
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  nodeGroups: NodeGroup[];
  nodes: any[] = [];

  constructor(private gt: GtEdit) {
    const hasVariableNameGtNode: NodeType[] = [];
    this.gt.nodeList.forEach(gtNode => {
      if (gtNode.variableName) {
        hasVariableNameGtNode.push({
          label: gtNode.variableName,
          name: 'component',
          args: gtNode,
        });
      }
    });
    this.nodeGroups = [
      {
        title: '内置节点',
        nodes: [{ name: 'output' }, { name: 'getMethod' }],
      },
      {
        title: '全局变量',
        nodes: [{ name: 'http' }, { name: 'timer' }, { name: 'interval' }],
      },
      {
        title: '组件列表',
        nodes: hasVariableNameGtNode,
      },
      {
        title: '本组件变量',
        nodes: [],
      },
      {
        title: '基本数据类型',
        nodes: [{ name: 'string' }, { name: 'number' }, { name: 'boolean' }, { name: 'null' }],
      },
      {
        title: 'Rxjs',
        nodes: [{ name: 'pipe' }, { name: 'map' }],
      },
      {
        title: '工具方法',
        nodes: [{ name: 'filter' }, { name: 'distinctUntilChanged' }, { name: 'tap' }, { name: 'switchMap' }],
      },
    ];
  }

  dragStart(event: DragEvent, node: NodeType) {
    const dataTransfer = event.dataTransfer!;
    dataTransfer.setData('id', node.name);
    if (node.args) {
      dataTransfer.setData('gtNodeID', node.args.id);
    }
  }

  dragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer!.setData('1', '1');
  }

  async drop(event: DragEvent) {
    event.preventDefault();
    // const dataTransfer = event.dataTransfer!;
    // const type = dataTransfer.getData('id');
    // const gtNodeID = dataTransfer.getData('gtNodeID');
    const node = new AAA();
    node.setPosition({
      x: event.offsetX,
      y: event.offsetY,
    });
    this.nodes = this.nodes.concat([
      node,
      // new Node({
      //   position: {
      //     x: event.offsetX,
      //     y: event.offsetY,
      //   },
      // }),
    ]);
  }

  save() {
    this.confirm.emit();
  }

  contextmenuEvent(event: MouseEvent) {
    event.preventDefault();
    // this.contextmenu.create(event, [
    //   {
    //     label: '删除',
    //   },
    //   {
    //     label: '复制',
    //   },
    // ]);
  }
}
