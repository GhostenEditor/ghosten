import { Subject } from 'rxjs';

import { BoardData, GtData, IGtNode, LogEvent } from '../types';
import { Board } from './board.class';
import { DataBinding } from './data-binding.class';
import { GtNode } from './gt.node';
import { Metadata } from './metadata';
import { Overwrite } from './overwrite.class';

const gtDefaultData: GtData = {
  metadata: {
    id: null,
    name: 'Untitled',
    description: null,
    status: null,
  },
  global: {},
  boards: [
    {
      id: 'main',
      type: 'main',
      gt: 'root',
      url: '',
      size: '',
      description: '',
      name: 'Main',
      noFooter: false,
      events: null,
      nodeList: [
        {
          type: 'root',
          id: 'root',
        },
      ],
    },
  ],
  template: [],
};

export interface Global {
  dataSource?: any[];
  router?: any;
}

/**
 * @Description: Ghost的基础类
 */
export abstract class Gt {
  public abstract globalService?: Map<string, Subject<any>>;
  public defaultConfigMap: IGtNode.DefaultConfigMap;
  public componentMap: Record<string, any>;
  log: Subject<LogEvent> = new Subject<LogEvent>();
  /**
   * @Description: ghost的元数据
   */
  metadata = new Metadata();
  global: Global = {
    dataSource: [],
  };
  /**
   * @Description: GtNode树的根节点
   */
  gt: GtNode | null;
  /**
   * @Description: 所有GtNode组成的数组
   */
  nodeList: Map<string, GtNode> = new Map<string, GtNode>();
  /**
   * @Description: 此功能展示不开放
   */
  boards: Board[] = [];
  currentBoard: Board | null = null;
  customComponent: Board[] = [];

  /**
   * @Description: 通过id获取到GtNode
   * @Params _id: string  GtNode的id
   * @Return: GtNode  返回查找到的GtNode
   */
  public getNodeById(id: string): GtNode | null {
    return this.nodeList.get(id) || null;
  }

  public getNodeByName(name: string): GtNode {
    return Array.from(this.nodeList.values()).filter(
      ({ property }) => property.name === name,
    )[0];
  }

  public getNodeByType(_type: string): GtNode[] {
    return Array.from(this.nodeList.values()).filter(
      ({ type }) => _type === type,
    );
  }

  removeNode?(gtNode: GtNode): void;

  public init(data?: string | null | GtData) {
    const {
      global,
      metadata = {},
      boards = [],
      template = [],
    } = this._parseGtData(data);
    this.global = Object.assign(this.global, global);
    this.metadata.setProperties(metadata);
    this.customComponent = template.map(data =>
      this._generateBoardFromBoardData(data),
    );
    this.boards = boards.map(data => this._generateBoardFromBoardData(data));
    this.setCurrentBoard(this.boards[0]);
  }

  private _parseGtData(data: string | null | undefined | GtData): GtData {
    if (typeof data === 'string') {
      return JSON.parse(data, (k, v) => {
        if (typeof v === 'string') {
          if (/^\/.+\/$/.test(v)) {
            return new RegExp(v.slice(1, -1));
          } else if (/^\[DataBinding]/.test(v)) {
            return new DataBinding(v.slice(13));
          }
        }
        return v;
      });
    } else if (data === undefined || data === null) {
      return gtDefaultData;
    } else {
      return data;
    }
  }

  private _generateBoardFromBoardData(data: BoardData): Board {
    const board = new Board(data);
    data.nodeList
      .map((data: IGtNode.Config) =>
        this.createGtNode(data, undefined, undefined, undefined, board),
      )
      .filter((v): v is GtNode => !!v);
    board.gt = this.getNodeById(data.gt)!;
    if (board.type === 'custom') {
      board.gt.isTemplate = true;
    }
    return board;
  }

  /**
   * @Description: 递归方法，调用GtNode生成类，生成GtNode树，私有方法，仅在内部调用
   * @Params data: any  GtNode的配置数据
   * @Params parent?: any  GtNode的parentNode
   * @Return: GtNode
   */
  public createGtNode(
    data: IGtNode.Config,
    parent: GtNode | null = this.getNodeById(data.parent!),
    inheritedNode?: GtNode,
    index?: number,
    board: Board = this.currentBoard!,
  ): GtNode | null {
    if (typeof data.template === 'string') {
      const templateNode = this.getNodeById(data.template);
      if (templateNode && parent) {
        const node = this.createTemplateGtNode(
          {
            ...data,
            type: templateNode.type,
          },
          parent,
          templateNode,
          data.overwrite,
          board,
        );
        node.isTemplateRoot = true;
        return node;
      } else {
        return null;
      }
    } else {
      const _inheritedNode =
        inheritedNode || this.defaultConfigMap.get(data.type)!;
      const component = this.componentMap[data.type];
      if (!_inheritedNode) {
        this.log.next({
          type: 'error',
          message: `类型为${data.type}的组件没有默认配置，无法生成`,
          data,
        });
        return null;
      }
      if (!component) {
        this.log.next({
          type: 'error',
          message: `类型为${data.type}的组件不存在，无法生成`,
          data,
        });
        return null;
      }
      const node = new GtNode(data, _inheritedNode, component);
      if (!node) {
        return null;
      }
      board.nodeList.set(node.id, node);
      this.nodeList.set(node.id, node);
      node.setParent(parent, index, node.outletID);
      if (Array.isArray(data.children)) {
        data.children.forEach(child => this.createGtNode(child, node));
      }
      // if (typeof data.template === 'string') {
      //   node.template = this.getNodeById(data.template);
      // }
      return node;
    }
  }

  public createTemplateGtNode(
    data: IGtNode.Config,
    parent: GtNode,
    templateNode: GtNode,
    overwrite: Record<string, any> = {},
    board: Board = this.currentBoard!,
  ) {
    const component = this.componentMap[data.type];
    const node = new GtNode(data, templateNode, component);
    node.templateRoot = parent.templateRoot || node;
    node.template = templateNode;
    if (node.templateRoot !== node) {
      node.templateRoot.overwrite[node.template.id] = {
        property: node.property,
        style: node.style,
        dataSource: node.dataSource,
      };
      node.core.canPaste = false;
      node.core.canCopy = false;
      node.core.canDelete = false;
      node.core.canCut = false;
    } else {
      node.core.canPaste = false;
      node.overwrite = new Overwrite();
      node.slot = data.slot!;
    }
    node.setParent(parent);
    board.nodeList.set(node.id, node);
    this.nodeList.set(node.id, node);
    if (node.type === 'slot') {
      node.core.canPaste = true;
      ((node.templateRoot.slot || {})[node.template.id] || []).forEach(
        (d: any) => {
          this.createGtNode(d, node, undefined, undefined, board);
        },
      );
    } else {
      templateNode.children.forEach(childNode => {
        this.createTemplateGtNode(
          { type: childNode.type, ...((overwrite || {})[childNode.id] || {}) },
          node,
          childNode,
          overwrite,
          board,
        );
      });
    }
    return node;
  }

  public setCurrentBoard(board: Board) {
    this.currentBoard = board;
    this.gt = board.gt;
  }

  public export(): GtData {
    return {
      metadata: this.metadata.export(),
      global: this.global,
      template: this.customComponent.map(board => board.export()),
      boards: this.boards.map(board => board.export()),
    };
  }

  /**
   * @Description: 压缩ghost的配置信息，将空对象空数组都删除，生成字符串，用于保存和预览
   * @Return: string
   */
  public exportString(): string {
    const replacer = (key: string, value: any) => {
      if (value instanceof RegExp) {
        return value.toString();
      } else if (value instanceof DataBinding) {
        return `[DataBinding]${value.data}`;
      } else if (Array.isArray(value) && value.length === 0) {
        return undefined;
      } else if (
        Object.prototype.toString.call(value) === '[object Object]' &&
        Object.keys(value).length === 0
      ) {
        return undefined;
      } else {
        return value;
      }
    };
    return JSON.stringify(
      JSON.parse(JSON.stringify(this.export(), replacer)),
      replacer,
    );
  }

  public destroy() {
    this.metadata.clear();
    this.global = {
      dataSource: [],
    };
    this.gt = null;
    this.nodeList.clear();
    this.boards = [];
    this.currentBoard = null;
    this.customComponent = [];
  }
}
