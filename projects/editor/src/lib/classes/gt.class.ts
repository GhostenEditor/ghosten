import { Inject, Injectable } from '@angular/core';

import { Board, Gt, GtNode, IGtNode, randomizer } from '@ghosten/common';

import { debounceTime } from 'rxjs/operators';
import { merge } from 'rxjs';

import { GtSettings, IGtSettings } from './gt-settings';
import { EventsService } from '../services';
import { GT_EDITOR_THEME_COLOR } from '../injectors';
import { GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP } from '../injectors-internal';
import { GtHistory } from './gt-history';
import { RemoveNodeData } from '../types';

@Injectable()
export class GtEdit extends Gt {
  get darkMode() {
    return this.themeColor() === 'dark';
  }

  globalService: any;
  mode: 'edit' | 'move' = 'edit';
  showReferenceLine = true;
  /**
   * @Description: 储存复制的样式
   */
  copiedStyle: Record<string, any>;
  /**
   * @Description: 储存复制的GtNode节点，类型为GtNode Id的数组
   */
  copiedNode: string[] = [];
  /**
   * @Description: 储存选中的GtNode，通常是最后点击的一个
   */
  /**
   * @Description: 此属性是为了适应多选而添加的，保存所有状态为active的GtNode
   */
  selected: GtNode[] = []; // 选中的所有节点

  history: GtHistory = new GtHistory();
  undoHistory: GtHistory = new GtHistory();
  settings = new GtSettings();

  constructor(
    public events: EventsService,
    @Inject(GT_EDITOR_THEME_COLOR) private themeColor: () => 'light' | 'dark',
    @Inject(GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP)
    public override defaultConfigMap: IGtNode.DefaultConfigMap,
  ) {
    super();
    this.events.onEvent.subscribe(data => {
      switch (data.type) {
        case 'CHANGE_PROPERTY':
        case 'INSERT_NODE':
        case 'MOVE_NODE':
        case 'REMOVE_NODE':
          this.history.push(data);
          this.undoHistory.clear();
      }
    });
    merge(
      this.events.CHANGE_STYLE,
      this.events.CHANGE_PROPERTY,
      this.events.CHANGE_ACTION,
      this.events.CHANGE_VALIDATOR,
      this.events.CHANGE_RIGHTS,
      this.events.PASTE_STYLE,
      this.events.MOVE_NODE,
      this.events.REMOVE_NODE,
      this.events.INSERT_NODE,
      this.events.UNDO,
      this.events.REDO,
    )
      .pipe(debounceTime(30000))
      .subscribe(() =>
        this.events.AUTO_SAVE.next({
          config: this.exportString(),
          settings: this.settings.export(),
        }),
      );
    this.events.CHANGE_SELECT.subscribe(selected => (this.settings.selected = selected.map(({ id }) => id)));
  }

  initSettings(settings: IGtSettings) {
    this.settings.init(settings);
    this.settings.selected.forEach(id => {
      const gtNode = this.getNodeById(id);
      if (gtNode) {
        this.changeSelect(gtNode, true);
      }
    });
  }

  undo() {
    const history = this.history.get();
    if (history.length) {
      const data = history.pop();
      if (data.type === 'CHANGE_PROPERTY') {
        const { name, gtNode, previousValue, value } = data.data;
        gtNode.property[name] = previousValue;
        this.undoHistory.push({
          type: data.type,
          data: { name, gtNode, previousValue: value, value: previousValue },
        });
        this.events.UNDO.next(data);
      }
      if (data.type === 'INSERT_NODE') {
        const { gtNode, parent, index = parent.children.length - 1 } = data.data;
        parent.children.splice(index, 1);
        parent.componentRef.instance.remove(index);
        this._removeGtNode(gtNode);
        this.undoHistory.push(data);
        this.events.UNDO.next(data);
      }
      if (data.type === 'REMOVE_NODE') {
        this.undoHistory.push(data);
        data.data.forEach(({ gtNode, parent, index }: any) => {
          parent.children.splice(index, 0, gtNode);
          this.nodeList.set(gtNode.id, gtNode);
          this.currentBoard!.nodeList.set(gtNode.id, gtNode);
          parent.componentRef.instance.insert(gtNode, index);
        });
        this.events.UNDO.next(data);
      }
      if (data.type === 'MOVE_NODE') {
        this.undoHistory.push(data);
        const { gtNode, previousParent, previousIndex } = data.data;
        gtNode.setParent(previousParent, previousIndex);
        this.events.UNDO.next(data);
      }
    } else {
      this.log.next({
        type: 'info',
        message: '暂无可撤销的操作！',
        data: null,
      });
    }
  }

  redo() {
    const history = this.undoHistory.get();
    if (history.length) {
      const data = history.pop();
      if (data.type === 'CHANGE_PROPERTY') {
        const { name, gtNode, previousValue, value } = data.data;
        gtNode.property[name] = previousValue;
        this.history.push({
          type: data.type,
          data: { name, gtNode, previousValue: value, value: previousValue },
        });
        this.events.REDO.next(data);
      }
      if (data.type === 'INSERT_NODE') {
        this.history.push(data);
        const { gtNode, parent, index } = data.data;
        parent.children.splice(index, 0, gtNode);
        this.nodeList.set(gtNode.id, gtNode);
        this.currentBoard!.nodeList.set(gtNode.id, gtNode);
        parent.componentRef.instance.insert(gtNode, index);
        this.events.REDO.next(data);
      }
      if (data.type === 'MOVE_NODE') {
        this.history.push(data);
        const { gtNode, parent, index } = data.data;
        gtNode.setParent(parent, index);
        this.events.REDO.next(data);
      }
    } else {
      this.log.next({
        type: 'info',
        message: '暂无可重做的操作！',
        data: null,
      });
    }
  }

  /**
   * @Description: 修改选中的GtNode，触发selectedChange事件（目前此方法存在性能问题，待优化）
   * @Params gtNode: GtNode  选中的GtNode
   * @Params multi?: boolean 是否为多选，也就是选中的时候是否按住了ctrl键
   * @Return: void
   */
  changeSelect(gtNode?: GtNode, multi?: boolean) {
    if (gtNode) {
      // 如果选中的节点非当前看板，则不做任何操作
      if (!this.currentBoard!.nodeList.has(gtNode.id)) {
        return;
      }
      if (this.selected.includes(gtNode)) {
        if (multi) {
          this.selected.splice(this.selected.indexOf(gtNode), 1);
        } else {
          if (this.selected.length === 1) {
            this.selected = [];
          } else {
            this.selected = [gtNode];
          }
        }
      } else {
        if (multi) {
          this.selected.push(gtNode);
        } else {
          this.selected = [gtNode];
        }
      }
    } else {
      this.selected = [];
    }
    this.events.CHANGE_SELECT.next(this.selected);
  }

  /**
   * @Description: 此方法暂未开放
   * @Return: void
   */
  addBoard(): Board {
    const board = new Board({
      name: 'Modal',
      type: 'modal',
      url: '',
      id: randomizer(),
      size: 'xl',
      events: null,
      description: '',
      noFooter: true,
    });
    this.boards.push(board);
    this.pages.push(board);
    board.gt = this.createGtNode(
      {
        type: 'root',
      },
      undefined,
      undefined,
      undefined,
      board.id,
    )!;
    this.setCurrentBoard(board);
    this.events.CHANGE_BOARD.next(board);
    return board;
  }

  addCustomComponent() {
    const newCustomComponent: Board = new Board({
      type: 'cc',
      id: randomizer(),
      name: '自定义组件',
      events: null,
      description: '',
      noFooter: true,
      size: null,
      url: '',
    });
    this.customComponent.push(newCustomComponent);
    this.boards.push(newCustomComponent);
    newCustomComponent.gt = this.createGtNode(
      {
        type: 'template',
      },
      undefined,
      undefined,
      undefined,
      newCustomComponent.id,
    )!;
    newCustomComponent.gt.isTemplate = true;
    this.setCurrentBoard(newCustomComponent);
  }

  addRemoteCustomComponent() {
    const newCustomComponent = new Board({
      type: 'rcc',
      id: randomizer(),
      name: '自定义组件',
      events: null,
      description: '',
      noFooter: true,
      size: null,
      url: '',
    });
    this.remoteCustomComponent.push(newCustomComponent);
    this.boards.push(newCustomComponent);
    newCustomComponent.gt = this.createGtNode(
      {
        type: 'template',
      },
      undefined,
      undefined,
      undefined,
      newCustomComponent.id,
    )!;
    newCustomComponent.gt.isTemplate = true;
    this.setCurrentBoard(newCustomComponent);
  }

  /**
   * @Description: 此方法暂未开放
   * @Return: void
   */
  removeBoard(board: Board) {
    const index = this.boards.indexOf(board);
    const currentIndex = this.boards.indexOf(this.currentBoard!);

    this._removeGtNode(board.gt);
    this.boards.splice(index, 1);
    switch (board.type) {
      case 'main':
      case 'modal':
        this.pages.splice(this.pages.indexOf(board), 1);
        break;
      case 'cc':
        this.customComponent.splice(this.customComponent.indexOf(board), 1);
        break;
      case 'rcc':
        this.remoteCustomComponent.splice(this.remoteCustomComponent.indexOf(board), 1);
        break;
    }
    if (index === currentIndex) {
      this.setCurrentBoard(this.boards[index - 1] || this.boards[0]);
    }
  }

  /**
   * @Description: 用于添加GtNode，此方法会把添加的GtNode设为selectedNode,并触发selectedChange和change事件
   * @Params type: string 新增GtNode的类型
   * @Params drop: GtNode 放置的GtNode
   * @Params index?: number 放置GtNode中的序号
   * @Params opt?: any 新增GtNode的配置属性
   * @Return: GtNode  返回新增的GtNode
   */
  addNode(type: string, parent: GtNode, index = -1, opt: any = {}, outletID?: string): GtNode | null {
    const gtNode = this.createGtNode({ type, outletID, ...opt }, parent, undefined, index);
    if (!gtNode) {
      return null;
    }
    parent.inheritList.forEach(node => {
      this.createGtNode({ type: gtNode.type, template: gtNode.id }, node, undefined, index);
    });
    this.selected = [gtNode];
    this.events.INSERT_NODE.next({ gtNode, parent, index });
    this.events.CHANGE_SELECT.next(this.selected);
    return gtNode;
  }

  /**
   * @Description: 用于移动GtNode，此方法会把拖拽的GtNode设为selectedNode,并触发selectedChange和change事件
   * @Params drag: GtNode 拖拽的GtNode
   * @Params drop: GtNode 放置的GtNode
   * @Params index?: number 放置GtNode中的序号
   * @Return: void
   */
  moveNode(drag: GtNode, drop: GtNode, index: number, outletID?: string) {
    if (
      drag.parent === drop &&
      drag.outletID === outletID &&
      (index === undefined
        ? drag.parent!.children.indexOf(drag) === drag.parent!.children.length - 1
        : drag.parent!.children.indexOf(drag) === index)
    ) {
      return;
    }
    const previousParent = drag.parent!;
    const previousIndex = previousParent.children.indexOf(drag);
    drag.setParent(drop, index, outletID);

    drag.inheritList.forEach((node, i) => {
      node.setParent(drop.inheritList[i], index, outletID);
    });
    this.events.MOVE_NODE.next({
      gtNode: drag,
      parent: drop,
      index,
      previousParent,
      previousIndex: previousIndex === -1 ? undefined : previousIndex,
    });
    // }
  }

  /**
   * @Description: 用于删除GtNodeNode，会删除所有选中的GtNode和childNode，此方法会触发selectedChange和change事件
   * @Return: void
   */
  removeNode(): void {
    const deleteList: RemoveNodeData = [];
    if (!this.selected || this.selected.some(gtNode => gtNode.type === 'root')) {
      return this.log.next({
        type: 'error',
        message: '无法删除',
        data: null,
      });
    }
    this.selected.forEach((gtNode: GtNode) => {
      if (gtNode.template && !gtNode.isTemplateRoot) {
        this.log.next({
          type: 'warning',
          message: '该节点由模板生成，无法删除',
        });
      }
      if (gtNode.template && gtNode.isTemplateRoot && gtNode.template.inheritList) {
        gtNode.template.inheritList.splice(gtNode.template.inheritList.indexOf(gtNode), 1);
      }
      const index = gtNode.parent!.children.indexOf(gtNode);
      this._removeGtNode(gtNode);
      deleteList.push({ gtNode: gtNode, parent: gtNode.parent!, index });
    });
    this.selected = [];
    this.events.REMOVE_NODE.next(deleteList);
    this.events.CHANGE_SELECT.next(this.selected);
  }

  addCustomNode(type: string, parent: GtNode, index = -1) {
    const templateNode = this.boards.filter(c => c.id === type)[0].gt;

    const gtNode = this.createGtNode({ type: 'template', template: templateNode.id }, parent, undefined, index);
    if (!gtNode) {
      return;
    }
    this.events.INSERT_NODE.next({ gtNode, parent, index });
    this.events.CHANGE_SELECT.next(this.selected);
    return gtNode;
  }

  override setCurrentBoard(board: Board) {
    super.setCurrentBoard(board);
    this.events.CHANGE_BOARD.next(board);
  }

  /**
   * @Description: 复制当前GtNode的样式
   * @Return: void
   */
  copyStyle() {
    if (this.selected.length !== 1) {
      this.log.next({
        type: 'error',
        message: '无法复制样式，因为当前选中了多个节点',
      });
      return;
    }
    this.copiedStyle = this.selected[0].style.export();
    this.events.COPY_STYLE.next(this.copiedStyle);
  }

  /**
   * @Description: 为所有选中的GtNode粘贴样式
   * @Return: void
   */
  pasteStyle() {
    const copiedStyle = this.copiedStyle;
    this.selected.forEach(({ core, style }) => core.canPasteStyle && style.setStyles(copiedStyle));
    this.events.PASTE_STYLE.next({
      pastedNodes: this.selected,
      pastedStyle: this.copiedStyle,
    });
  }

  /**
   * @Description: 复制GtNode
   * @Return: void
   */
  copyNode() {
    this.copiedNode = this.selected.map(({ id }) => id);
  }

  /**
   * @Description: 如果选中的GtNode都可以添加childNode，给选中的GtNode逐个插入复制的GtNode
   * @Return: void
   */
  pasteNode(targetNode: GtNode) {
    const getGtNodeConfig = (gtNode: GtNode): IGtNode.Config => {
      const config = gtNode.export();
      if (!gtNode.isTemplateRoot) {
        config.children = gtNode.children.map(childNode => getGtNodeConfig(childNode));
      } else {
        for (const key in config.slot) {
          config.slot[key].forEach(childNodeConfig => delete childNodeConfig.id);
        }
      }
      delete config.id;
      return config;
    };
    let parentNode: GtNode | null = null;
    let index: number;
    if (targetNode.core.canHasChild) {
      parentNode = targetNode;
    } else {
      while (targetNode.parent) {
        if (targetNode.parent.core.canHasChild && !targetNode.parent.template) {
          parentNode = targetNode.parent;
          index = targetNode.parent.children.indexOf(targetNode);
          break;
        } else {
          targetNode = targetNode.parent!;
        }
      }
    }
    if (!parentNode) {
      return;
    }
    this.copiedNode.forEach(id => {
      const insertedNode = this.createGtNode(
        getGtNodeConfig(this.getNodeById(id)!),
        parentNode,
        undefined,
        typeof index === 'undefined' ? index : ++index,
      );
      this.events.INSERT_NODE.next({
        parent: parentNode!,
        gtNode: insertedNode!,
        index,
      });
    });
  }

  removeCustomComponent(board: Board) {
    this.selected = [board.gt];
    this.removeNode();
    this.customComponent.splice(this.customComponent.indexOf(board), 1);
  }

  /**
   * @Description: 删除的递归方法，递归GtNode的子节点
   * @Params node:GtNode
   * @Return: void
   */
  private _removeGtNode(node: GtNode): void {
    const board = this.getBoardById(node.boardId)!;
    [...node.inheritList].forEach(node => this._removeGtNode(node));
    if (node.template) {
      node.template.inheritList.splice(node.template.inheritList.indexOf(node), 1);
    }
    node.remove();
    board.nodeList.delete(node.id);
    this.nodeList.delete(node.id);
    [...node.children].forEach(child => this._removeGtNode(child));
  }

  exportSettings(): any {
    return this.settings.export();
  }
}
