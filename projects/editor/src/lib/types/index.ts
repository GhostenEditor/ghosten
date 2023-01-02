import { GtNode } from '@ghosten/common';

import { GtEdit } from '../classes';

export type GtContextMenuType = 'customElement' | 'gtNode';
export type GtContextMenu = (
  gt: GtEdit,
  type: GtContextMenuType,
  target: any,
  event: MouseEvent,
) => void;

export interface InsertNodeData {
  gtNode: GtNode;
  parent: GtNode;
  index?: number;
}

export interface RemoveNodeData
  extends Array<{
    gtNode: GtNode;
    parent: GtNode;
    index: number;
  }> {}

export interface MoveNodeData {
  gtNode: GtNode;
  parent: GtNode;
  index?: number;
  previousParent: GtNode;
  previousIndex?: number;
}

export interface GtConfig extends Record<string, any> {
  exitUrl: string;
}

export interface GtElement {
  label: string;
  type: string;
  icon?: string;
  content?: any;
  disabled?: boolean;
}

export interface ElementList {
  title: string;
  expanded?: boolean;
  elements: GtElement[];
}

export interface GtAuth {
  customComponent: boolean;
  modal: boolean;
  preview: boolean;
  editProperty: boolean;
  editVariable: boolean;
  editStyle: boolean;
  editRight: boolean;
  editAction: boolean;
  editDatasource: boolean;
  editValidator: boolean;
  editDirective: boolean;
}

export interface TopBarButton {
  title?: string;
  icon?: string;
  children?: TopBarButton[];
  disabled?: boolean;
  active?: boolean;

  onclick?(gt: GtEdit): void;
}

export interface PanelTableColumn {
  head: string;
  prop: string;
  width?: string | null;
}

export interface EditorBrand {
  title: string;
  href: string;
  src: string;
  alt: string;
}
