import { Core, DataSource, Property, Style } from '../classes';
import { BoardData } from './board';
import { IMetadata } from './metadata';

export interface GtData {
  boards: BoardData[];
  template: BoardData[];
  global: Record<string, any>;
  metadata: IMetadata;
}

export namespace IGtNode {
  export interface Variable {
    type: string;
    name: string;
    value: any;
  }

  export interface Validator {
    type: string;
    value: Record<string, any>;
  }

  export interface Directive {
    type: string;
    needTemplate?: boolean;
    value: {
      input?: Record<string, any>;
      output?: Record<string, any>;
      export?: Record<string, any>;
    };
  }

  export interface Action {
    desc: string | null;
    script: string;
    scopes: any[];
    type: string;
    editable?: boolean;
  }

  export interface Config {
    type: string;
    id?: string;
    variableName?: string;
    variable?: any[];
    validator?: any;
    style?: any;
    property?: any;
    action?: any;
    rights?: any;
    dataSource?: any;
    directive?: any[];
    template?: string;
    childIndex?: number;
    parent?: string;
    overwrite?: any;
    outletID?: string;
    slot?: { [id: string]: Config[] };
    children?: Config[];
  }

  export interface DefaultConfig {
    core: Core;
    property: Property;
    style: Style;
    dataSource: DataSource;
    action: any;
    rights: boolean;
    validator: boolean;
    directive: any[];
    variable: Variable[];
  }

  export type DefaultConfigMap = Map<string, DefaultConfig>;

  export enum PropertyEnum {
    type = 'type',
    id = 'id',
    parent = 'parent',
    childIndex = 'childIndex',
    style = 'style',
    property = 'property',
    dataSource = 'dataSource',
    rights = 'rights',
    validator = 'validator',
    action = 'action',
    template = 'template',
    directive = 'directive',
    overwrite = 'overwrite',
    slot = 'slot',
    outletID = 'outletID',
    variableName = 'variableName',
    variable = 'variable',
  }
}
