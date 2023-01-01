import {
  AfterViewInit,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { GtNode } from '@ghosten/common';
import { Subscription } from 'rxjs';

import { GtEdit } from '../../classes';
import { TemplateDirective } from '../../directives';

@Component({ template: '' })
export class EditAbstractComponent<T = any>
implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  @ViewChildren(TemplateDirective) templates: QueryList<TemplateDirective>;

  @HostBinding('class.gt-node') gtClass = true;

  @HostBinding('class.gt-slot') get gtSlot() {
    return this.gtNode.type === 'slot';
  }

  @HostBinding('class.opacity-25') get isHidden() {
    return !this.gtNode.property.show;
  }

  @HostBinding('class.clearfix') get clearfix() {
    return this.gtNode.style && this.gtNode.style.clearfix;
  }

  @HostBinding('attr.data-id') get id() {
    return this.gtNode.id;
  }

  @HostBinding('attr.data-type') get type() {
    return this.gtNode.type;
  }

  @HostBinding('attr.data-root') get root() {
    return this.gtNode.parent ? null : '';
  }

  @HostBinding('attr.data-draggable') get draggable() {
    return this.gtNode.type !== 'root' &&
      (!this.gtNode.template || this.gtNode.isTemplateRoot)
      ? ''
      : null;
  }

  @HostBinding('attr.data-can-has-child') get canHasChild() {
    return this.gtNode.core.canHasChild;
  }

  @HostBinding('attr.data-droppable') get droppable() {
    const res =
      (!this.gtNode.template || this.gtNode.type === 'slot') &&
      this.gtNode.core.canHasChild;
    return res ? '' : null;
  }

  @HostBinding('style.fontSize') get fontSize() {
    return this.gtNode.style.fontSize + 'px';
  }

  @HostBinding('style.width') get width() {
    return this.gtNode.style.width;
  }

  @HostBinding('style.height') get height() {
    return this.gtNode.style.height;
  }

  @HostBinding('style.margin') get margin() {
    return this.gtNode.style.margin;
  }

  @HostBinding('style.padding') get padding() {
    return this.gtNode.style.padding;
  }

  @HostBinding('style.display') get display() {
    return this.gtNode.style.display;
  }

  @HostBinding('style.position') get position() {
    return this.gtNode.style.position;
  }

  @HostBinding('style.float') get float() {
    return this.gtNode.style.float;
  }

  @HostBinding('style.overflow') get overflow() {
    return this.gtNode.style.overflow;
  }

  @HostBinding('style.flexDirection') get flexDirection() {
    return this.gtNode.style.flexDirection;
  }

  @HostBinding('style.flexGrow') get flexGrow() {
    return this.gtNode.style.flexGrow;
  }

  @HostBinding('style.flexShrink') get flexShrink() {
    return this.gtNode.style.flexShrink;
  }

  @HostBinding('style.flexWrap') get flexWrap() {
    return this.gtNode.style.flexWrap;
  }

  @HostBinding('style.justifyContent') get justifyContent() {
    return this.gtNode.style.justifyContent;
  }

  @HostBinding('style.alignItems') get alignItems() {
    return this.gtNode.style.alignItems;
  }

  @HostBinding('style.alignContent') get alignContent() {
    return this.gtNode.style.alignContent;
  }

  @HostBinding('style.background') get background() {
    return this.gtNode.style.background;
  }

  @HostBinding('style.color') get color() {
    return this.gtNode.style.color;
  }

  @HostBinding('style.textAlign') get textAlign() {
    return this.gtNode.style.textAlign;
  }

  @HostBinding('style.left') get left() {
    return this.gtNode.style.left;
  }

  @HostBinding('style.top') get top() {
    return this.gtNode.style.top;
  }

  @HostBinding('style.right') get right() {
    return this.gtNode.style.right;
  }

  @HostBinding('style.bottom') get bottom() {
    return this.gtNode.style.bottom;
  }

  @HostBinding('style.zIndex') get zIndex() {
    return this.gtNode.style.zIndex;
  }

  @HostBinding('style.border') get border() {
    if (this.gtNode.style.border && this.gtNode.style.border.all) {
      return this.gtNode.style.border.all;
    }
  }

  @HostBinding('style.border-left') get borderLeft() {
    if (this.gtNode.style.border && this.gtNode.style.border.left) {
      return this.gtNode.style.border.left;
    }
  }

  @HostBinding('style.border-right') get borderRight() {
    if (this.gtNode.style.border && this.gtNode.style.border.right) {
      return this.gtNode.style.border.right;
    }
  }

  @HostBinding('style.border-top') get borderTop() {
    if (this.gtNode.style.border && this.gtNode.style.border.top) {
      return this.gtNode.style.border.top;
    }
  }

  @HostBinding('style.border-bottom') get borderBottom() {
    if (this.gtNode.style.border && this.gtNode.style.border.bottom) {
      return this.gtNode.style.border.bottom;
    }
  }

  @HostBinding('style.font-weight') get fontWeight() {
    return this.gtNode.style.fontWeight;
  }

  subscriptions: Subscription[] = [];
  public property: T = this.gtNode.property;

  constructor(public gtNode: GtNode<T>, public gt: GtEdit) {}

  ngOnInit() {
    if (!this.gtNode.core.dynamicTemplate) {
      this.refresh();
    }
  }

  ngAfterViewInit() {
    if (this.gtNode.core.dynamicTemplate) {
      this.refresh();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  refresh() {
    if (this.gtNode.core.canHasChild) {
      if (this.gtNode.core.dynamicTemplate) {
        const templatesMap = new Map();
        this.templates.forEach(template => {
          template.clear();
          templatesMap.set(template.templateID, template);
        });
        this.gtNode.children.forEach(gtNode => {
          const template = templatesMap.get(gtNode.outletID);
          if (template) template.insert(gtNode);
        });
      } else {
        this.template.clear();
        this.gtNode.children.forEach(gtNode => {
          this.template.insert(gtNode);
        });
      }
    }
  }

  insert(gtNode: GtNode, index?: number) {
    if (this.gtNode.core.dynamicTemplate) {
      const template = this.templates.find(
        te => te.templateID === gtNode.outletID,
      );
      if (template) {
        return template.insert(gtNode, index);
      } else {
        throw new Error();
      }
    } else {
      return this.template.insert(gtNode, index);
    }
  }

  remove(gtNode: GtNode | number) {
    if (typeof gtNode === 'number') {
      this.template.remove(gtNode);
    } else {
      if (this.gtNode.core.dynamicTemplate) {
        const template = this.templates.find(
          te => te.templateID === gtNode.outletID,
        );
        if (template) {
          return template.remove(
            gtNode
              .parent!.children.filter(p => p.outletID === gtNode.outletID)
              .indexOf(gtNode),
          );
        } else {
          console.warn('该组件未在页面显示：%O', gtNode);
        }
      } else {
        return this.template.remove(gtNode.parent!.children.indexOf(gtNode));
      }
    }
  }

  move(gtNode: GtNode, index: number) {
    return this.template.move(gtNode, index);
  }
}
