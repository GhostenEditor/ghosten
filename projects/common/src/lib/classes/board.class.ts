import { BoardData, IGtNode } from '../types';
import { GtNode } from './gt.node';

export class Board {
  name: string;
  type: 'main' | 'modal' | 'cc' | 'rcc';
  url: string;
  description: string;
  gt: GtNode;
  id: string;
  size: string | null;
  noFooter: boolean;
  nodeList: Map<string, GtNode> = new Map<string, GtNode>();
  events: Record<'confirm' | 'cancel' | 'onInit' | 'onDestroy', IGtNode.Action | null>;

  constructor(config: Omit<BoardData, 'gt' | 'nodeList'>) {
    this.name = config.name || 'main';
    this.url = config.url || '';
    this.description = config.description || '';

    this.id = config.id || '';
    this.type = config.type!;
    this.size = config.size!;
    if (config.type === 'main') {
      this.events = { onInit: [], onDestroy: [], ...(config.events || {}) };
    } else if (config.type === 'modal') {
      this.events = {
        confirm: [],
        cancel: [],
        onInit: [],
        onDestroy: [],
        ...(config.events || {}),
      };
    }
  }

  insertGtNode() {}

  export(): BoardData {
    return {
      gt: this.gt.id,
      nodeList: this.gt.getSubNodesAndSelf().map(gtNode => gtNode.export()),
      name: this.name,
      type: this.type,
      url: this.url,
      description: this.description,
      id: this.id,
      size: this.size,
      noFooter: this.noFooter,
      events: this.events,
    };
  }
}
