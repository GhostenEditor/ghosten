import { cloneDeep, randomizer } from '../utils';
import { Core } from './core.class';
import { DataSource } from './dataSource.class';
import { IGtNode } from '../types';
import { Overwrite } from './overwrite.class';
import { Property } from './property.class';
import { Style } from './style.class';

/**
 * @Description: GtNode的生成类
 */
export class GtNode<T = {}, C = any, ComponentRef = any, ComponentPortal = any> {
  /**
   * @Description: 唯一标识，自动生成
   */
  id: string;
  /**
   * @Description: 类型，目前支持的有[root,row,column,division,text,button,input,select,table,tree,datepicker,textarea,toggle]
   *               (row,column即将删除，用division代替，tree暂不开发)
   */
  type: string;
  /**
   * @Description: GtNode的基本属性配置，包括style，value，以及组件的特有配置等等。具体配置参数详见配置文件common/types/property.types.ts
   */
  isTemplate: boolean;
  outletID?: string;
  template: GtNode | null = null;
  templateRoot: GtNode | null = null;
  isTemplateRoot: boolean;
  inheritList: GtNode[] = [];
  slot: { [id: string]: IGtNode.Config[] };
  overwrite: Overwrite;
  core: Core;
  style: Style;
  property: Property & T;
  dataSource: DataSource;
  validator?: IGtNode.Validator[];
  directive: IGtNode.Directive[] = [];
  variable: IGtNode.Variable[] = [];
  variableName: string | null;

  /**
   * @Description: GtNode的权限配置，目前只支持每个GtNode仅有单个权限
   */
  rights: any;
  /**
   * @Description: 储存一些用于内部调用的属性，包括是否可以复制粘贴，添加childNode等，该属性仅在内部调用，页面上不能配置。具体配置参数详见配置文件common/types/core.types.ts
   */
  /**
   * @Description: 储存GtNode的各种事件，具体事件类型详见配置文件common/types/action.types.ts
   */
  action: Record<string, IGtNode.Action[]>;

  // component: C;
  componentRef: ComponentRef | null = null;
  componentPortal: ComponentPortal;
  /**
   * @Description: 当前GtNode的parentNode，若GtNode为根GtNode（既type='root'），parent为null
   */
  parent: GtNode | null = null;
  /**
   * @Description: 当前GtNode的childNode组成的数组
   */
  children: GtNode[] = [];
  dynamicChildren: (() => GtNode[]) | null = null;
  /**
   * @Description: 当前GtNode的路径，一直追溯到根GtNode
   */
  path: GtNode[] = [this];

  /* 当创建时，只会传入type，其他的属性都会采用默认配置 */
  constructor(
    private readonly _rawData: IGtNode.Config,
    private inheritedNode: IGtNode.DefaultConfig | GtNode,
    public boardId: string,
  ) {
    if (inheritedNode instanceof GtNode) {
      this.template = inheritedNode;
    }
    const {
      id,
      type,
      validator,
      directive,
      style,
      property,
      dataSource,
      outletID,
      variableName,
      variable,
      ...nodeConfig
    } = _rawData;
    this.id = id || randomizer();
    this.variableName = variableName || null;
    this.type = type;
    this.outletID = outletID;
    if (!inheritedNode) {
      console.warn(`type为${this.type}的组件不存在`);
      return;
    }
    this.core = Core.create({}, inheritedNode.core);
    this.style = Style.create(style || {}, inheritedNode.style);
    this.property = Property.create<T>(property || {}, inheritedNode.property);
    this.action = Object.assign(Object.create(cloneDeep(inheritedNode.action)), nodeConfig.action);
    this.dataSource = DataSource.create(dataSource, inheritedNode.dataSource);
    this.rights =
      inheritedNode.rights && Object.assign(Object.create(cloneDeep(inheritedNode.rights)), nodeConfig.rights);
    this.validator = validator || inheritedNode.validator || [];
    this.directive = directive || inheritedNode.directive || [];
    this.variable = variable || inheritedNode.variable || [];
    // validator || (inheritedNode.validator && Object.assign(Object.create(null), inheritedNode.validator, validator));
    // Object.defineProperty(this, 'component', {
    //   enumerable: false,
    //   configurable: false,
    //   value: component,
    // });
  }

  findClosest(type: string): GtNode | null {
    return this.path.reverse().find(gtNode => gtNode.type === type) || null;
  }

  reset() {
    const { id, type, validator, style, property, ...nodeConfig } = cloneDeep(this._rawData);
    this.core = Core.create({}, this.inheritedNode.core);
    this.style = Style.create(style || {}, this.inheritedNode.style);
    // this.property = Property.create(property || {}, this.inheritedNode.property, this.globalService);
    this.action = Object.assign(Object.create(cloneDeep(this.inheritedNode.action)), nodeConfig.action);
    this.rights =
      this.inheritedNode.rights &&
      Object.assign(Object.create(cloneDeep(this.inheritedNode.rights)), nodeConfig.rights);
    this.validator =
      validator ||
      (this.inheritedNode.validator && Object.assign(Object.create(null), this.inheritedNode.validator, validator));
  }

  addSelf() {
    if (this.parent && this.parent.componentRef) {
      // @ts-ignore
      this.property.show = true;
      this.parent.componentRef.instance.insert(this, this.parent.children.indexOf(this));
    }
  }

  removeSelf() {
    if (this.parent && this.parent.componentRef) {
      // @ts-ignore
      this.property.show = false;
      this.parent.componentRef.instance.remove(this.parent!.children.indexOf(this));
    }
  }

  getNodesByType(type: string): GtNode[] {
    const result: GtNode[] = [];

    const getNodeByType = (gtNode: GtNode) => {
      if (gtNode.type === type) {
        result.push(gtNode);
      }
      gtNode.children.forEach(childNode => getNodeByType(childNode));
    };
    getNodeByType(this);
    return result;
  }

  getSubNodes(): GtNode[] {
    if (this.isTemplateRoot) {
      return [];
    }
    const getNodeList = (nodeList: GtNode[], acc: GtNode[] = []): GtNode[] => {
      nodeList.forEach(childNode => {
        acc.push(childNode);
        if (!childNode.isTemplateRoot) {
          getNodeList(childNode.children, acc);
        }
      });
      return acc;
    };
    return getNodeList(this.children);
  }

  getSubNodesAndSelf(): GtNode[] {
    const getNodeList = (gtNode: GtNode, acc: GtNode[] = []): GtNode[] => {
      acc.push(gtNode);
      if (!gtNode.isTemplateRoot) {
        gtNode.children.forEach(childNode => getNodeList(childNode, acc));
      }
      return acc;
    };
    return getNodeList(this);
  }

  export(): IGtNode.Config {
    return {
      [IGtNode.PropertyEnum.type]: this.type,
      [IGtNode.PropertyEnum.id]: this.id,
      [IGtNode.PropertyEnum.parent]: this.parent ? this.parent.id : undefined,
      [IGtNode.PropertyEnum.childIndex]: this.parent ? this.parent.children.indexOf(this) : undefined,
      [IGtNode.PropertyEnum.dataSource]: this.dataSource.export(),
      [IGtNode.PropertyEnum.style]: this.style.export(),
      [IGtNode.PropertyEnum.property]: this.property.export(),
      [IGtNode.PropertyEnum.rights]: this.rights,
      [IGtNode.PropertyEnum.validator]: this.validator,
      [IGtNode.PropertyEnum.directive]: this.directive,
      [IGtNode.PropertyEnum.action]: this.action,
      [IGtNode.PropertyEnum.template]: this.template ? this.template.id : undefined,
      [IGtNode.PropertyEnum.outletID]: this.outletID,
      [IGtNode.PropertyEnum.overwrite]: this.isTemplateRoot ? this.overwrite.export() : null,
      [IGtNode.PropertyEnum.variableName]: this.variableName || undefined,
      [IGtNode.PropertyEnum.variable]: this.variable,
      [IGtNode.PropertyEnum.slot]: this.isTemplateRoot
        ? this.getNodesByType('slot').reduce<any>((acc, gtNode) => {
            acc[gtNode.template!.id] = gtNode.getSubNodes().map(childNode => childNode.export());
            return acc;
          }, {})
        : null,
    };
  }

  setParent(parentNode: GtNode | null, index?: number, outletID?: string) {
    if (parentNode) {
      if (index === undefined || index === null) {
        index = parentNode.children.length;
      }
      if (this.parent) {
        const oldIndex = this.parent!.children.indexOf(this);
        if (parentNode === this.parent) {
          if (index === oldIndex) {
            if (this.outletID !== outletID) {
              this.outletID = outletID;
              if (this.parent.componentRef) {
                this.parent.componentRef.instance.move(this, index > oldIndex ? index - 1 : index);
              }
            }
          } else {
            if (this.parent.componentRef) {
              this.outletID = outletID;
              this.parent.componentRef.instance.move(this, index > oldIndex ? index - 1 : index);
            }
            this.parent.children.splice(oldIndex, 1);
            this.parent.children.splice(index, 0, this);
          }
        } else {
          if (this.parent) {
            if (this.parent.componentRef) {
              this.parent.componentRef.instance.remove(this);
            }
            this.parent.children.splice(oldIndex, 1);
          }
          parentNode.children.splice(index, 0, this);
          this.parent = parentNode;
          this.path = [...parentNode.path, this];
          this.outletID = outletID;
          if (this.parent.componentRef) {
            parentNode.componentRef.instance.insert(this, index);
          }
        }
      } else {
        this.parent = parentNode;
        this.parent.children.splice(index, 0, this);
        this.path = [...parentNode.path, this];
        this.outletID = outletID;
        if (this.parent.componentRef) {
          parentNode.componentRef.instance.insert(this, index);
        }
      }
    } else {
      this.parent = null;
      this.path = [this];
    }
  }

  remove() {
    if (this.parent) {
      const index = this.parent.children.indexOf(this);
      if (this.parent.componentRef && this.componentRef) {
        this.parent.componentRef.instance.remove(this);
      }
      this.parent.children.splice(index, 1);
    }
    this.componentRef = null;
  }
}
