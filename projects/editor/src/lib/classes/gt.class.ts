import { EventEmitter, Inject, Injectable } from '@angular/core';

import { Board, Gt, GtNode, IGtNode, randomizer } from '@ghosten/common';

import { EventsService } from '../services';
import { GT_EDIT_COMPONENT_MAP } from '../injectors';
import { GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP } from '../injectors-internal';
import { GtHistory } from './gt-history';
import { RemoveNodeData } from '../types';

@Injectable()
export class GtEdit extends Gt {
  static darkMode: boolean = false;
  get darkMode() {
    return GtEdit.darkMode;
  }

  globalService: any;
  mode: 'edit' | 'move' = 'edit';
  showReferenceLine = true;
  /**
   * @Description: 储存复制的样式
   */
  copiedStyle: any;
  /**
   * @Description: 储存复制的GtNode节点，类型为GtNode Id的数组
   */
  copiedNode: string[] = [];
  /**
   * @Description: 此功能展示不开放
   */
  remoteCustomComponent: Record<string, Board> = {};
  /**
   * @Description: 储存选中的GtNode，通常是最后点击的一个
   */
  /**
   * @Description: 此属性是为了适应多选而添加的，保存所有状态为active的GtNode
   */
  selected: GtNode[] = []; // 选中的所有节点

  onEvents: EventEmitter<any> = new EventEmitter<any>();
  history: GtHistory = new GtHistory();
  undoHistory: GtHistory = new GtHistory();

  constructor(
    private events: EventsService,
    @Inject(GT_EDIT_COMPONENT_MAP) componentMap: any[],
    @Inject(GT_NODE_INTERNAL_DEFAULT_CONFIG_MAP)
    public override defaultConfigMap: IGtNode.DefaultConfigMap,
  ) {
    super();
    // this.defaultConfig = Object.assign({}, ...defaultConfig);
    this.componentMap = Object.assign({}, ...componentMap);
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
    this.events.UPDATE_TEMPLATE.subscribe(({ template, list }) => {
      // list.forEach((node: any) => {
      //   node.children = template.children.map((data: GtNode) => this._createCustomNode(data, node, node, node.overwrite));
      // });
    });
  }

  // _generateTemplateNode() {
  //   this.nodeList.forEach(node => {
  //     const data = node._rawData;
  //     if (typeof data.template === 'string') {
  //       const templateNode = this.getNodeById(data.template);
  //       if (templateNode) {
  //         node.template = templateNode;
  //         node.templateRoot = true;
  //         if (templateNode.inheritList) {
  //           templateNode.inheritList.push(node);
  //         } else {
  //           templateNode.inheritList = [node];
  //         }
  //         node.overwrite = data.overwrite || {};
  //         node.slot = data.slot;
  //         node.children = templateNode.children.map(childNode => this._createCustomNode(childNode, node, node, node.overwrite)!);
  //         // todo
  //         // node._style.setParentStyle(templateNode._style);
  //         // node._property.setParentProperty(templateNode._property);
  //         // node.style = templateNode.style && Object.assign(Object.create(templateNode.style), data.style || Object.create(null));
  //         // node.property = templateNode.property && Object.assign(Object.create(templateNode.property), data.property || Object.create(null));
  //         // node.datasource = templateNode.datasource && Object.assign(Object.create(templateNode.datasource), data.datasource || Object.create(null));
  //       }
  //
  //     } else if (data.children && data.children.length) {
  //       // node.children = data.children.map(child => this._createGtNode(child, node));
  //     }
  //   });
  // }

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
        const { gtNode, parent, index } = data.data;
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
          this.selected.unshift(gtNode);
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
    board.gt = this.createGtNode(
      {
        type: 'root',
      },
      undefined,
      undefined,
      undefined,
      board,
    )!;
    this.boards.push(board);
    this.setCurrentBoard(board);
    this.events.CHANGE_BOARD.next(board);
    return board;
  }

  addCustomComponent(type: string = 'custom') {
    const newCustomComponent: Board = new Board({
      type,
      id: randomizer(),
      name: '自定义组件',
      events: null,
      description: '',
      noFooter: true,
      size: null,
      url: '',
    });
    newCustomComponent.gt = this.createGtNode(
      {
        type: 'template',
      },
      undefined,
      undefined,
      undefined,
      newCustomComponent,
    )!;
    newCustomComponent.gt.isTemplate = true;
    this.customComponent.push(newCustomComponent);
    this.setCurrentBoard(newCustomComponent);
  }

  addRemoteCustomComponent(
    remoteId: string,
    name: string,
    description: string,
    { type = 'custom', id = randomizer(), gt }: any,
  ) {
    const newCustomComponent = {
      type,
      id,
      gt: this.createGtNode(gt),
      name,
      description,
    };
    newCustomComponent.gt!.isTemplate = true;
    Object.defineProperty(this.remoteCustomComponent, remoteId, {
      value: newCustomComponent,
      enumerable: true,
    });
    // @ts-ignore
    this.customComponent.push(newCustomComponent);
    // setTimeout(() => this.currentBoard = newCustomComponent, 100);
  }

  /**
   * @Description: 此方法暂未开放
   * @Return: void
   */
  removeBoard(board: Board) {
    const index = this.boards.indexOf(board);
    const currentIndex = this.boards.indexOf(this.currentBoard!);
    this.boards.splice(index, 1);
    if (index === currentIndex) {
      this.setCurrentBoard(this.boards[index - 1] || this.boards[0]);
    }
    this._removeGtNode(board.gt);
  }

  /**
   * @Description: 用于移动GtNode，此方法会把拖拽的GtNode设为selectedNode,并触发selectedChange和change事件
   * @Params drag: GtNode 拖拽的GtNode
   * @Params drop: GtNode 放置的GtNode
   * @Params index?: number 放置GtNode中的序号
   * @Return: void
   */
  dropNode(drag: GtNode, drop: GtNode, index?: number, outletID?: string) {
    // if (drag && drop) {
    // const dragParent = drag.parent;
    // let dragIndex = dragParent!.children.indexOf(drag);
    // // dragParent!.children.splice(dragIndex, 1);
    // // drop.children.splice(index || drop.children.length, 0, drag);
    // if (dragParent === drop && dragIndex > index!) {
    //   dragIndex++;
    // }

    // if (dragParent === drop) {
    //   drop.componentRef!.instance.move(drag, index);
    // } else {
    const previousParent = drag.parent!;
    const previousIndex = previousParent.children.indexOf(drag);
    drag.setParent(drop, index, outletID);
    // drop.componentRef!.instance.insert(drag, index);
    // dragParent!.componentRef!.instance.remove(dragIndex);
    // }

    // this._setValidator(drag, !!drop.findClosest('form'));
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
   * @Description: 用于添加GtNode，此方法会把添加的GtNode设为selectedNode,并触发selectedChange和change事件
   * @Params type: string 新增GtNode的类型
   * @Params drop: GtNode 放置的GtNode
   * @Params index?: number 放置GtNode中的序号
   * @Params opt?: any 新增GtNode的配置属性
   * @Return: GtNode  返回新增的GtNode
   */
  addNode(
    type: string,
    parent: GtNode,
    index = -1,
    opt: any = {},
    outletID?: string,
  ): GtNode | null {
    const gtNode = this.createGtNode(
      { type, outletID, ...opt },
      parent,
      undefined,
      index,
    );
    if (!gtNode) {
      return null;
    }
    this.selected = [gtNode];
    this.events.INSERT_NODE.next({ gtNode, parent, index });
    this.events.CHANGE_SELECT.next(this.selected);
    return gtNode;
  }

  addCustomNode(type: string, parent: GtNode, index = -1) {
    const templateNode = this.customComponent.filter(c => c.id === type)[0].gt;
    return this.createGtNode(
      { type: 'template', template: templateNode.id },
      parent,
    );
    // if (!gtNode) {
    //   return;
    // }
    // gtNode.overwrite = {};
    // gtNode.children = inheritNode.children.map((data: any) => this._createCustomNode(data, gtNode, gtNode, gtNode.overwrite)!);
    // if (inheritNode.inheritList) {
    //   inheritNode.inheritList.push(gtNode);
    // } else {
    //   inheritNode.inheritList = [gtNode];
    // }
    // gtNode.template = inheritNode;
    // gtNode.idTemplateRoot = true;

    // this._attachTreeStructure(gtNode, parent, index);
    // parent.componentRef!.instance.insert(gtNode, index);
    // return gtNode;
  }

  /**
   * @Description: 用于删除GtNodeNode，会删除所有选中的GtNode和childNode，此方法会触发selectedChange和change事件
   * @Return: void
   */
  override removeNode(): void {
    const deleteList: RemoveNodeData = [];
    if (
      !this.selected ||
      this.selected.some(gtNode => gtNode.type === 'root')
    ) {
      return this.log.next({
        type: 'error',
        message: '无法删除',
        data: null,
      });
    }
    this.selected.forEach((node: GtNode) => {
      if (node.template && !node.isTemplateRoot) {
        // return this.notice.noticeWarning('无法删除', '该节点由模板生成，无法删除');
      }
      if (node.template && node.isTemplateRoot && node.template.inheritList) {
        node.template.inheritList.splice(
          node.template.inheritList.indexOf(node),
          1,
        );
      }
      if (node.isTemplate) {
        if (node.inheritList.length) {
          // return this.notice.noticeWarning('无法删除', '该模板绑定了其他组件');
        }
      }
      this._removeGtNode(node);
      const index = node.parent!.children.indexOf(node);
      node.parent!.componentRef!.instance.remove(node);
      node.parent!.children.splice(index, 1);
      deleteList.push({ gtNode: node, parent: node.parent!, index });
    });
    this.selected = [];
    this.events.REMOVE_NODE.next(deleteList);
    this.events.CHANGE_SELECT.next(this.selected);
  }

  override setCurrentBoard(board: Board) {
    super.setCurrentBoard(board);
    this.events.CHANGE_BOARD.next(board);
    // this.changeSelect(this.currentBoard!.gt);
  }

  /**
   * @Description: 复制当前GtNode的样式
   * @Return: void
   */
  copyStyle() {
    if (this.selected.length !== 1) {
      // return this.notice.noticeWarning('无法复制', '当前选中了多个节点');
    }
    this.copiedStyle = JSON.stringify(this.selected[0].style);
    this.events.COPY_STYLE.next(this.copiedStyle);
  }

  /**
   * @Description: 为所有选中的GtNode粘贴样式
   * @Return: void
   */
  pasteStyle() {
    const copiedStyle = JSON.parse(this.copiedStyle);
    this.selected.forEach(({ style }) =>
      Object.keys(style).forEach(key => {
        if (copiedStyle[key] !== undefined) {
          style[key] = copiedStyle[key];
        }
      }),
    );
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
  pasteNode(parentNode: GtNode, index?: number) {
    const getGtNodeConfig = (gtNode: GtNode): IGtNode.Config => {
      const config = gtNode.export();
      if (!gtNode.isTemplateRoot) {
        config.children = gtNode.children.map(childNode =>
          getGtNodeConfig(childNode),
        );
      } else {
        for (const key in config.slot) {
          config.slot[key].forEach(
            childNodeConfig => delete childNodeConfig.id,
          );
        }
      }
      delete config.id;
      return config;
    };
    this.copiedNode.forEach(id => {
      const insertedNode = this.createGtNode(
        getGtNodeConfig(this.getNodeById(id)!),
        parentNode,
      );
      this.events.INSERT_NODE.next({
        parent: parentNode,
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

  // private _setValidator(gtNode: GtNode, flag: boolean) {
  //   gtNode.validator =
  //     flag &&
  //     this.defaultConfigMap.get(gtNode.type)!.validator &&
  //     cloneDeep(this.defaultConfigMap.get(gtNode.type)!.validator);
  //   if (gtNode.core.canHasChild) {
  //     gtNode.children.forEach(node => this._setValidator(node, flag));
  //   }
  // }

  /**
   * @Description: 删除的递归方法，递归GtNode的子节点
   * @Params node:GtNode
   * @Return: void
   */
  private _removeGtNode(node: GtNode): void {
    this.currentBoard!.nodeList.delete(node.id);
    this.nodeList.delete(node.id);
    node.children.forEach(child => this._removeGtNode(child));
  }
}

const darkMode = matchMedia('(prefers-color-scheme: dark)');
GtEdit.darkMode = darkMode.matches;
darkMode.addEventListener('change', function () {
  GtEdit.darkMode = this.matches;
});
