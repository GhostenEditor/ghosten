import { FormControl, ValidatorFn } from '@angular/forms';

import { Board, GtNode, IGtNode } from '@ghosten/common';

import { type GtEdit } from '../classes';

export class Menu {
  label?: string | number;
  disabled?: boolean;
  divider?: boolean;
  children?: Menu[];
  active?: boolean;
  checked?: boolean;
  desc?: string;

  onclick?(menu: Menu, event: MouseEvent): void;
}

export type GtContextMenu = (gt: GtEdit, gtNode: GtNode) => Menu[];

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

export interface TopButtonClickData {
  button: any;
  data: any;
}

export interface ChangeActionData {
  gtNode: GtNode;
  type: 'add' | 'update' | 'remove';
  action: IGtNode.Action;
  previousAction: IGtNode.Action | null;
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
  src: string;
  alt: string;
  click: () => void;
}

export interface FormItem {
  hide?: boolean;
  disabled?: boolean;
  label?: string;
  type: string;
  name: string;
  value?: any;
  className?: string;
  options?: OptionModel[];
  columns?: { name: string; prop: string; type?: string; value?: any }[];
  tableAddType?: 'inline' | 'button';
  text?: string;
  btnText?: string;
  relateList?: any[];
  inherit?: boolean;
  canBind?: boolean;
  canConnect?: boolean;
  validator?: ((gt?: any) => ValidatorFn | ValidatorFn[]) | null;
  updateOn?: 'change' | 'blur' | 'submit';

  onclick?(): void;

  onchange?(value: string): void;
}

export interface OptionModel extends Record<string, string> {
  label: string;
  value: string;
}

export interface FormEvent {
  formItem: FormItem;
  formControl: FormControl;
}

export namespace GtEvent {
  export type Events =
    | ChangeSelect
    | ChangeStyle
    | ChangeProperty
    | ChangeAction
    | ChangeBoard
    | CopyStyle
    | PasteStyle
    | TopButtonClick
    | Save
    | AutoSave
    | SaveComponent
    | RemoveComponent
    | InsertNode
    | RemoveNode
    | MoveNode
    | Undo
    | Redo
    | Custom;

  export interface ChangeSelect {
    type: 'CHANGE_SELECT';
    data: GtNode[];
  }

  export interface ChangeStyle {
    type: 'CHANGE_STYLE';
    data: {
      name: string;
      value: any;
      previousValue: any;
      gtNode: GtNode;
    };
  }

  export interface ChangeProperty {
    type: 'CHANGE_PROPERTY';
    data: {
      name: string;
      value: any;
      previousValue: any;
      gtNode: GtNode;
    };
  }

  export interface ChangeAction {
    type: 'CHANGE_ACTION';
    data: ChangeActionData;
  }

  export interface ChangeBoard {
    type: 'CHANGE_BOARD';
    data: Board;
  }

  export interface CopyStyle {
    type: 'COPY_STYLE';
    data: Record<string, any>;
  }

  export interface PasteStyle {
    type: 'PASTE_STYLE';
    data: {
      pastedNodes: GtNode[];
      pastedStyle: Record<string, any>;
    };
  }

  export interface TopButtonClick {
    type: 'TOP_BUTTON_CLICK';
    data: TopButtonClickData;
  }

  export interface Save {
    type: 'SAVE';
    data: { config: string; settings: any };
  }

  export interface AutoSave {
    type: 'AUTO_SAVE';
    data: { config: string; settings: any };
  }

  export interface SaveComponent {
    type: 'SAVE_COMPONENT';
    data: {
      config: string;
      id: string;
    };
  }

  export interface RemoveComponent {
    type: 'REMOVE_COMPONENT';
    data: {
      id: string;
    };
  }

  export interface InsertNode {
    type: 'INSERT_NODE';
    data: InsertNodeData;
  }

  export interface RemoveNode {
    type: 'REMOVE_NODE';
    data: RemoveNodeData;
  }

  export interface MoveNode {
    type: 'MOVE_NODE';
    data: MoveNodeData;
  }

  export interface Undo {
    type: 'UNDO';
    data: any;
  }

  export interface Redo {
    type: 'REDO';
    data: any;
  }

  export interface Custom {
    type: 'CUSTOM';
    data: { type: string } & any;
  }
}

export type GtEvent = null;
