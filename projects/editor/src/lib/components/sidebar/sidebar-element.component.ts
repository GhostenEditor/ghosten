import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Board } from '@ghosten/common';

import { distinctUntilChanged, filter, map, mergeMap, takeUntil, tap } from 'rxjs/operators';

import { ElementList, GtAuth, GtElement } from '../../types';
import { GT_AUTH_CONFIG, GT_INTERNAL_ELEMENT_LISTS, GT_TEMPLATE_MAP } from '../../injectors';
import {
  TranslateAnimation,
  dragEnd,
  dragMove,
  findGtElement,
  fromDragEvent,
  getDropAndRefElementByTarget,
  getEventPoint,
  isTouchEvent,
  removeChild,
  removeDragRootStyle,
  setDragRootStyle,
} from '../../utils';
import { ContextMenu } from '../../modules';
import { EventsService } from '../../services';
import { GtEdit } from '../../classes';

@Component({
  selector: 'gt-accordion-element',
  providers: [TranslateAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <gt-accordion [multi]="true">
    <gt-accordion-item
      *ngFor="let list of internalElementLists"
      [cardTitle]="list.title"
      [expanded]="list.expanded"
      (opened)="opened(list)"
      (closed)="closed(list)"
    >
      <div class="d-grid" style="grid: auto / 1fr 1fr 1fr; grid-gap: .5rem">
        <button
          type="button"
          class="text-center btn btn-text overflow-hidden"
          *ngFor="let element of list.elements"
          #target
          [attr.data-type]="element.type"
          [title]="element.label"
          (mousedown)="itemDrag(element, target, $event)"
          (touchstart)="itemDrag(element, target, $event)"
        >
          <i class="fs-1 gt-icon" *ngIf="element.icon">{{ element.icon || 'custom' }}</i>
          <div class="text-truncate">{{ element.label }}</div>
        </button>
      </div>
    </gt-accordion-item>
    <gt-accordion-item
      *ngIf="gtAuth.customComponent"
      [cardTitle]="customList.title"
      [expanded]="customList.expanded"
      (opened)="opened(customList)"
      (closed)="closed(customList)"
    >
      <div class="d-grid" style="grid: auto / 1fr 1fr 1fr; grid-gap: .5rem">
        <button
          type="button"
          class="text-center btn btn-text overflow-hidden"
          *ngFor="let custom of gt.customComponent"
          #target
          [class.active]="gt.currentBoard === custom"
          [attr.data-id]="custom.id"
          [title]="custom.name || custom.type"
          (mousedown)="itemDrag(custom, target, $event)"
          (touchstart)="itemDrag(custom, target, $event)"
          (dblclick)="editCustom(custom)"
          (contextmenu)="editCustomInfo(custom, $event)"
        >
          <i class="fs-1 gt-icon">custom</i>
          <input
            type="text"
            class="form-control input-xs"
            *ngIf="editTypeMode"
            [(ngModel)]="custom.type"
            (blur)="editTypeMode = false"
          />
          <div *ngIf="!editTypeMode" class="text-truncate">
            {{ custom.name || custom.type }}
          </div>
        </button>
      </div>
      <div class="d-grid gap-2" [class.mt-2]="gt.customComponent.length">
        <button class="btn btn-light" (click)="gt.addCustomComponent()">添加</button>
      </div>
    </gt-accordion-item>
    <gt-accordion-item cardTitle="自定义(remote)">
      <div class="d-grid" style="grid: auto / 1fr 1fr 1fr; grid-gap: .5rem">
        <button
          type="button"
          class="text-center btn btn-text overflow-hidden"
          *ngFor="let custom of gt.remoteCustomComponent"
          #target
          [class.active]="gt.currentBoard === custom"
          [attr.data-id]="custom.id"
          [title]="custom.name || custom.type"
          (mousedown)="itemDrag(custom, target, $event)"
          (touchstart)="itemDrag(custom, target, $event)"
          (dblclick)="editCustom(custom)"
          (contextmenu)="editCustomInfo(custom, $event)"
        >
          <i class="fs-1 gt-icon">custom</i>
          <input
            type="text"
            class="form-control input-xs"
            *ngIf="editTypeMode"
            [(ngModel)]="custom.name"
            (mousedown)="$event.stopPropagation()"
            (blur)="editTypeMode = false"
          />
          <div *ngIf="!editTypeMode" class="text-truncate">
            {{ custom.name || custom.type }}
          </div>
        </button>
      </div>
      <div class="d-grid gap-2" [class.mt-2]="gt.remoteCustomComponent.length">
        <button class="btn btn-light" (click)="gt.addRemoteCustomComponent()">添加</button>
      </div>
    </gt-accordion-item>
  </gt-accordion>`,
})
export class SidebarElementComponent {
  editMode = false;
  editTypeMode = false;
  customList: any = {
    title: $localize`:Element Group Title\: Custom Component:自定义`,
    elements: this.gt.customComponent,
    expanded: this.gt.settings.elementAccordionExpanded[$localize`:Element Group Title\: Custom Component:自定义`],
  };

  constructor(
    public gt: GtEdit,
    private cdr: ChangeDetectorRef,
    private events: EventsService,
    private translateAnimation: TranslateAnimation,
    private contextmenu: ContextMenu,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(GT_TEMPLATE_MAP) private templateMap: any,
    @Inject(GT_AUTH_CONFIG)
    public gtAuth: GtAuth,
    @Inject(GT_INTERNAL_ELEMENT_LISTS)
    public internalElementLists: ElementList[],
  ) {
    this.internalElementLists.forEach(elementList => {
      elementList.expanded = this.gt.settings.elementAccordionExpanded[elementList.title];
    });
    this.templateMap = templateMap.reduce((acc: any, cur: any) => ({ ...acc, ...cur }), {});
    this.events.CHANGE_BOARD.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  itemDrag(element: GtElement | Board, dragEl: HTMLElement, event: MouseEvent | TouchEvent) {
    if (
      (!this.gt.currentBoard || this.gt.currentBoard.type === 'cc' || this.gt.currentBoard.type === 'rcc') &&
      element instanceof Board
    ) {
      this.gt.log.next({ type: 'warning', message: '目前自定义组件无法嵌套使用' });
      return;
    }
    if (!isTouchEvent(event) && event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    let dropElement: HTMLElement | null = null;
    let referenceElement: HTMLElement | null = null;
    let originalTarget: HTMLElement | null = null;
    setDragRootStyle(this._document.documentElement, 'userSelect', 'none');
    fromDragEvent(this._document, event)
      .pipe(
        // map((evt): HTMLElement | null =>
        //   closest(evt.target as HTMLElement, '.gt-element'),
        // ),
        // filter((dragEl: HTMLElement | null): dragEl is HTMLElement => !!dragEl),
        map(() => {
          this.cdr.detach();
          const container = this._document.createElement('div');
          originalTarget = dragEl;
          const type = element.type;
          let template: string;
          if (type) {
            if (this.templateMap[type]) {
              template = this.templateMap[type];
            } else {
              template = `<div style="width: 10rem;height: 10rem;display: flex;justify-content: center;align-items: center;border: 3px dashed #fff">未知组件</div>`;
            }
          } else {
            template = `<div style="width: 10rem;height: 10rem;display: flex;justify-content: center;align-items: center;border: 3px dashed #fff">自定义组件</div>`;
          }
          container.style.setProperty('max-width', '10rem');
          container.innerHTML = template;
          const mirror = container.cloneNode(true) as HTMLElement;
          const placeholder = container.children[0].cloneNode(true) as HTMLElement;
          const source = container.children[0].cloneNode(true) as HTMLElement;
          mirror.classList.add('draggable-mirror');
          placeholder.classList.add('draggable-placeholder');
          source.classList.add('draggable-source');

          const { x, y } = getEventPoint(event);
          mirror.style.transform = `translate(${x}px,${y}px)`;
          mirror.classList.add('draggable-mirror');
          mirror.style.left = '0';
          mirror.style.top = '0';
          this._document.body.appendChild(mirror);
          this._document.body.appendChild(placeholder);
          return {
            mirror,
            placeholder,
            source,
            event,
          };
        }),
      )
      .pipe(
        mergeMap(({ event, mirror, placeholder, source }) =>
          dragMove(this._document, event).pipe(
            tap(e => {
              const { x, y } = getEventPoint(e);
              mirror!.style.transform = `translate(${x}px,${y}px)`;
            }),
            map(e => getDropAndRefElementByTarget(e, source, this._document)),
            filter(
              (
                e,
              ): e is {
                parentElement: HTMLElement;
                refChild: HTMLElement | null;
              } => !!e,
            ),
            filter(({ parentElement }) => {
              if (parentElement.dataset.accept) {
                return parentElement.dataset.accept.split(',').includes(originalTarget!.dataset.type!);
              } else {
                return true;
              }
            }),
            map(({ refChild, parentElement }) => {
              // console.log('refChild:%O parentElement:%O', refChild, parentElement);
              referenceElement = refChild;
              dropElement = parentElement;
              return { refChild, parentElement };
            }),
            distinctUntilChanged((x, y) => x.parentElement === y.parentElement && x.refChild === y.refChild),
            tap(({ parentElement, refChild }) => {
              const beforePositions = Array.prototype.filter
                .call(parentElement.children, child => child !== source)
                .map(child => child.getBoundingClientRect());
              parentElement.insertBefore(source, refChild);
              const afterPositions = Array.prototype.filter
                .call(parentElement.children, child => child !== source)
                .map(child => child.getBoundingClientRect());
              Array.prototype.filter
                .call(parentElement.children, child => child !== source)
                .forEach((child, index) => {
                  this.translateAnimation.add({
                    element: child,
                    from: {
                      left: beforePositions[index].left - afterPositions[index].left,
                      top: beforePositions[index].top - afterPositions[index].top,
                    },
                  });
                });
              const rect = source.getBoundingClientRect();
              placeholder.style.width = rect.width + 'px';
              placeholder.style.height = rect.height + 'px';
              this.translateAnimation.add({
                element: placeholder,
                to: {
                  left: rect.left,
                  top: rect.top,
                },
              });
            }),
            takeUntil(
              dragEnd(this._document, event).pipe(
                tap(() => {
                  removeDragRootStyle(this._document.documentElement, 'userSelect');
                  removeChild(placeholder);
                  removeChild(source);
                  removeChild(mirror);
                  this.cdr.reattach();

                  if (!dropElement) {
                    return;
                  }
                  const parentID = findGtElement(dropElement)!.dataset.id!;
                  const parentNode = this.gt.getNodeById(parentID);
                  const refNode = referenceElement && this.gt.getNodeById(referenceElement.dataset.id!);
                  const dropIndex = refNode ? refNode.parent!.children.indexOf(refNode) : parentNode!.children.length;

                  if (element instanceof Board) {
                    const type = originalTarget!.dataset.id;
                    this.gt.addCustomNode(type!, parentNode!, dropIndex);
                  } else {
                    const type = element.type;
                    this.gt.addNode(type, parentNode!, dropIndex, element.content, dropElement.dataset.droppable);
                  }

                  dropElement = null;
                  referenceElement = null;
                }),
              ),
            ),
          ),
        ),
      )
      .subscribe();
  }

  editCustom(custom: Board) {
    this.gt.setCurrentBoard(custom);
    this.editMode = true;
  }

  editCustomInfo(board: Board, event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    const menus = [
      {
        label: $localize`:Context Menu\: Modify:修改`,
        onclick: () => {
          this.editType();
        },
      },
      {
        label: $localize`:Context Menu\: Remove:删除`,
        onclick: () => {
          this.gt.removeBoard(board);
          this.cdr.detectChanges();
          if (board.type === 'rcc') {
            this.events.REMOVE_COMPONENT.emit({
              id: board.id,
            });
          }
        },
      },
    ];
    if (board.type === 'rcc') {
      menus.unshift({
        label: $localize`:Context Menu\: Upload:上传`,
        onclick: () => {
          this.events.SAVE_COMPONENT.emit({
            config: JSON.stringify(board.export()),
            id: board.id,
          });
        },
      });
    }
    this.contextmenu.create(event, menus);
  }

  editType() {
    this.editTypeMode = !this.editTypeMode;
    this.cdr.detectChanges();
  }

  opened(panel: ElementList) {
    panel.expanded = true;
    this.gt.settings.changeElementAccordionExpanded(panel.title, true);
  }

  closed(panel: ElementList) {
    panel.expanded = false;
    this.gt.settings.changeElementAccordionExpanded(panel.title, false);
  }
}
