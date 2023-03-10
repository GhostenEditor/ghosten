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
      *ngFor="let list of customList"
      [cardTitle]="list.title"
      [expanded]="list.expanded"
      (opened)="opened(list)"
      (closed)="closed(list)"
    >
      <div class="d-grid" style="grid: auto / 1fr 1fr 1fr; grid-gap: .5rem">
        <button
          type="button"
          class="text-center btn btn-text overflow-hidden"
          *ngFor="let item of list.elements"
          #target
          [class.active]="gt.currentBoard === item"
          [attr.data-id]="item.id"
          [title]="item.name || item.type"
          (mousedown)="itemDrag(item, target, $event)"
          (touchstart)="itemDrag(item, target, $event)"
          (dblclick)="editCustom(item)"
          (contextmenu)="editCustomInfo(item, $event)"
        >
          <i class="fs-1 gt-icon">custom</i>
          <input
            type="text"
            class="form-control input-xs"
            *ngIf="editTypeMode"
            [(ngModel)]="item.type"
            (blur)="editTypeMode = false"
          />
          <div *ngIf="!editTypeMode" class="text-truncate">
            {{ item.name || item.type }}
          </div>
        </button>
      </div>
      <div class="d-grid gap-2" [class.mt-2]="list.elements.length">
        <button class="btn btn-light" i18n="Button: Add" (click)="addCustom(list.type)">??????</button>
      </div>
    </gt-accordion-item>
  </gt-accordion>`,
})
export class SidebarElementComponent {
  editMode = false;
  editTypeMode = false;
  customList: { title: string; type: string; elements: Board[]; expanded: boolean }[] = [
    {
      title: $localize`:Element Group Title\: Custom Component:?????????`,
      type: 'cc',
      elements: this.gt.customComponent,
      expanded: this.gt.settings.elementAccordionExpanded[$localize`:Element Group Title\: Custom Component:?????????`],
    },
    {
      title: $localize`:Element Group Title\: Custom Component(Remote):?????????(Remote)`,
      type: 'rcc',
      elements: this.gt.remoteCustomComponent,
      expanded:
        this.gt.settings.elementAccordionExpanded[
          $localize`:Element Group Title\: Custom Component(Remote):?????????(Remote)`
        ],
    },
  ];

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
      this.gt.log.next({ type: 'warning', message: '???????????????????????????????????????' });
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
        map(() => {
          this.cdr.detach();
          const container = this._document.createElement('div');
          originalTarget = dragEl;
          const type = element.type;
          let template: string;
          if (type === 'cc' || type === 'rcc') {
            template = `<div style="width: 10rem;height: 10rem;display: flex;justify-content: center;align-items: center;border: 3px dashed #fff">???????????????</div>`;
          } else {
            if (this.templateMap[type]) {
              template = this.templateMap[type];
            } else {
              template = `<div style="width: 10rem;height: 10rem;display: flex;justify-content: center;align-items: center;border: 3px dashed #fff">????????????</div>`;
            }
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

  addCustom(type: string) {
    switch (type) {
      case 'cc':
        this.gt.addCustomComponent();
        break;
      case 'rcc':
        this.gt.addRemoteCustomComponent();
        break;
    }
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
        label: $localize`:Context Menu\: Modify:??????`,
        onclick: () => {
          this.editType();
        },
      },
      {
        label: $localize`:Context Menu\: Remove:??????`,
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
        label: $localize`:Context Menu\: Upload:??????`,
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

  opened(panel: { title: string; expanded?: boolean }) {
    panel.expanded = true;
    this.gt.settings.changeElementAccordionExpanded(panel.title, true);
  }

  closed(panel: { title: string; expanded?: boolean }) {
    panel.expanded = false;
    this.gt.settings.changeElementAccordionExpanded(panel.title, false);
  }
}
