import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CdkNestedTreeNode, CdkTree, FlatTreeControl } from '@angular/cdk/tree';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { GtNode } from '@ghosten/common';

import { Subscription, merge, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { TreeFlatDataSource, TreeFlattener } from './flat-data-source';
import { ContextMenu } from '../../modules';
import { EventsService } from '../../services';
import { GT_CONTEXTMENU } from '../../injectors';
import { GtContextMenu } from '../../types';
import { GtEdit } from '../../classes';

interface FlattenNode {
  expandable: boolean;
  type: string;
  level: number;
  source: GtNode;
}

@Component({
  selector: 'gt-accordion-elTree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-secondary-subtle p-2 text-center border-bottom" i18n>
      共{{ gt.currentBoard!.nodeList.size }}个节点
    </div>
    <div class="p-3">
      <cdk-tree
        class="py-2"
        [dataSource]="dataSource"
        cdkDropList
        [treeControl]="treeControl"
        [cdkDropListSortPredicate]="cdkDropListSortPredicate"
        (cdkDropListDropped)="cdkDropListDropped($event)"
      >
        <cdk-tree-node
          class="d-block mb-1"
          *cdkTreeNodeDef="let node"
          cdkDrag
          cdkDragLockAxis="y"
          [cdkDragDisabled]="node.source.template && !node.source.isTemplateRoot"
          [cdkDragData]="node.source"
          cdkDropList
          cdkTreeNodePadding
          cdkTreeNodePaddingIndent="26"
        >
          <div class="d-flex align-items-center px-1">
            <div style="width: 2rem;"></div>
            <button
              type="button"
              class="btn btn-text btn-sm text-nowrap"
              [class.active]="gt.selected.includes(node.source)"
              (click)="selectTreeNode(node.source, $event)"
              (contextmenu)="onContextmenu(node.source, $event)"
            >
              {{ node.type }}
              <small *ngIf="node.source.outletID">(Outlet ID: {{ node.source.outletID }})</small>
            </button>
          </div>
        </cdk-tree-node>
        <cdk-tree-node
          class="d-block mb-1"
          *cdkTreeNodeDef="let node; when: hasChild"
          cdkDrag
          cdkDragLockAxis="y"
          [cdkDragData]="node.source"
          cdkDropList
          cdkTreeNodePadding
          cdkTreeNodePaddingIndent="26"
        >
          <div class="d-flex align-items-center px-1">
            <button
              type="button"
              class="btn btn-expander btn-sm"
              [attr.aria-label]="'Toggle ' + node.type"
              [style.transform]="treeControl.isExpanded(node) ? 'rotate(90deg)' : ''"
              cdkTreeNodeToggle
            >
              <i class="gt-icon">chevron_right</i>
            </button>
            <button
              type="button"
              class="btn btn-text btn-sm text-nowrap"
              [class.active]="gt.selected.includes(node.source)"
              (click)="selectTreeNode(node.source, $event)"
              (contextmenu)="onContextmenu(node.source, $event)"
            >
              {{ node.type }} ( {{ node.source.children.length }} )
              <small *ngIf="node.source.outletID">(Outlet ID: {{ node.source.outletID }})</small>
            </button>
          </div>
        </cdk-tree-node>
      </cdk-tree>
    </div>
  `,
})
export class SidebarTreeComponent implements OnInit, OnDestroy {
  flatNodeMap = new Map<FlattenNode, GtNode>();
  nestedNodeMap = new Map<GtNode, FlattenNode>();
  private _transformer = (node: GtNode, level: number): FlattenNode => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode &&
      existingNode.source === node &&
      existingNode.expandable === (!!node.children && node.children.length > 0) &&
      existingNode.level === level
        ? existingNode
        : {
            expandable: !!node.children && node.children.length > 0,
            type: node.type,
            level: level,
            source: node,
          };
    flatNode.source = node;
    flatNode.level = level;
    flatNode.expandable = !!node.children && node.children.length > 0;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };
  treeControl = new FlatTreeControl<FlattenNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new TreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  dataSource = new TreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: { expandable: boolean; name: string; level: number }) => node.expandable;
  @ViewChild(CdkTree) tree: CdkTree<GtNode>;
  @ViewChildren(CdkNestedTreeNode) treeNodes: QueryList<CdkNestedTreeNode<GtNode>>;
  private subscription1: Subscription = Subscription.EMPTY;
  private subscription2: Subscription = Subscription.EMPTY;

  constructor(
    public gt: GtEdit,
    private events: EventsService,
    private cdr: ChangeDetectorRef,
    private contextmenu: ContextMenu,
    @Optional() @Inject(GT_CONTEXTMENU) private gtContextMenu: GtContextMenu,
  ) {}

  ngOnInit() {
    this.subscription1 = merge(
      of(null),
      this.events.onEvent.pipe(
        filter(
          ({ type }) =>
            ['INSERT_NODE', 'REMOVE_NODE', 'MOVE_NODE', 'CHANGE_SELECT', 'UNDO', 'REDO', 'CHANGE_BOARD'].indexOf(type) >
            -1,
        ),
      ),
    )
      // todo 性能优化
      // .pipe(debounceTime(0))
      .subscribe(() => {
        this.dataSource.data = [this.gt.currentBoard!.gt];
        this.cdr.detectChanges();
      });
    this.subscription2 = this.events.CHANGE_SELECT.subscribe(selected => {
      selected.forEach(gtNode => {
        gtNode.path.forEach(node => {
          const treeNode = this.nestedNodeMap.get(node);
          this.treeControl.expand(treeNode!);
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  onContextmenu(gtNode: GtNode, event: MouseEvent) {
    event.preventDefault();
    // const targetNode = this.gt.getNodeById(gtNode.id);
    if (!this.gt.selected.includes(gtNode!)) {
      this.gt.changeSelect(gtNode!);
    }
    if (this.gtContextMenu) {
      const menus = this.gtContextMenu(this.gt, gtNode);
      this.contextmenu.create(event, menus);
    }
  }

  selectTreeNode(gtNode: GtNode, event: MouseEvent) {
    const selectedNode = this.gt.getNodeById(gtNode.id);
    if (selectedNode) {
      this.gt.changeSelect(selectedNode, event.metaKey || event.ctrlKey);
    }
  }

  onEvent($event: any) {
    const selectedNode = this.gt.getNodeById($event.node.id)!;
    if (!this.gt.selected.includes(selectedNode)) {
      this.gt.changeSelect(selectedNode);
    }
  }

  cdkDropListSortPredicate(index: number, drag: CdkDrag<GtNode>, drop: CdkDropList<GtNode>): boolean {
    const dragNode = drag.data;
    const dropNode = (drop.getSortedItems()[index] as CdkDrag<GtNode>).data;
    return !!dropNode.parent && !dropNode.path.includes(dragNode);
  }

  cdkDropListDropped({ currentIndex, container, item }: CdkDragDrop<GtNode>) {
    const current = container.getSortedItems()[currentIndex] as CdkDrag<GtNode>;
    this.gt.moveNode(item.data, current.data.parent!, current.data.parent!.children.indexOf(current.data));
  }
}
