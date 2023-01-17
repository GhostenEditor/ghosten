import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  NgZone,
  OnInit,
  Optional,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';

import { GtNode } from '@ghosten/common';

import { distinctUntilChanged, distinctUntilKeyChanged, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { ContextMenu, TemplateDirective } from '../../modules';
import { Drag, TranslateAnimation, closest, findGtElement } from '../../utils';
import { EventsService } from '../../services';
import { GT_CONTEXTMENU } from '../../injectors';
import { GtContextMenu } from '../../types';
import { GtEdit } from '../../classes';

@Component({
  preserveWhitespaces: false,
  selector: 'gt-blackboard',
  providers: [TranslateAnimation],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'position-relative d-flex flex-column flex-grow-1 overflow-hidden',
  },
  template: `
    <div
      page-structure
      gtPan
      [panTarget]="page"
      [panDisabled]="gt.mode !== 'move'"
      class="oblique-stripes overflow-auto position-relative h-100"
      [class.overflow-auto]="gt.mode === 'edit'"
      [class.overflow-hidden]="gt.mode === 'move'"
      (updateTransform)="updateTransform($event)"
    >
      <div
        gtResize
        gtZoom
        resizes="all"
        class="gt-page"
        page-structure-source
        #page
        [minWidth]="300"
        [maxWidth]="5000"
        [minHeight]="500"
        [maxHeight]="5000"
        [setMin]="true"
        [transform]="true"
        [gtZoomDisabled]="gt.mode !== 'move'"
        [zoomZone]="el.nativeElement"
        [style.transform]="transform"
        style="margin-bottom: 12rem;"
        (updateTransform)="updateTransform($event)"
      >
        <ng-template gtTemplate></ng-template>
      </div>
    </div>
  `,
})
export class BlackboardComponent implements OnInit, AfterViewInit {
  @Output() gtNodeHover = new EventEmitter<GtNode | null>();
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  @ViewChild('page', { static: true }) page: ElementRef<HTMLDivElement>;
  private readonly isBrowser: boolean;

  transform = `matrix(1, 0, 0, 1, 0, 0)`;
  /**
   * @Description: 储存hover状态的gtNode.property.name
   */
  itemName: string | null = null;

  @HostListener('click', ['$event']) blackboardClick($event: MouseEvent) {
    if (this.gt.mode !== 'move') {
      const targetNode = this.getTargetNode($event);
      if (targetNode) {
        this.gt.changeSelect(targetNode, $event.metaKey || $event.ctrlKey);
      }
    }
  }

  @HostListener('contextmenu', ['$event']) blackBoardContextmenu(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    const targetNode = this.getTargetNode(event);
    if (!targetNode) {
      return;
    }
    if (!this.gt.selected.includes(targetNode)) {
      this.gt.changeSelect(targetNode);
    }
    if (this.gtContextMenu) {
      const menus = this.gtContextMenu(this.gt, targetNode);
      this.contextmenu.create(event, menus);
    }
  }

  constructor(
    public el: ElementRef,
    public gt: GtEdit,
    private events: EventsService,
    private translateAnimation: TranslateAnimation,
    private viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private direction: Directionality,
    private ngZone: NgZone,
    private contextmenu: ContextMenu,
    @Inject(DOCUMENT) private _document: Document,
    @Optional() @Inject(GT_CONTEXTMENU) private gtContextMenu: GtContextMenu,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.events.CHANGE_BOARD.subscribe(() => this.init());
  }

  ngOnInit() {
    // todo bug fix 此处会是element tree的contextmenu事件runOutsideAngular
    this.ngZone.runOutsideAngular(() => {
      this.initDragEvent();
    });
    this.ngZone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(this.el.nativeElement, 'mousemove')
        .pipe(
          distinctUntilKeyChanged('target'),
          map(event => {
            if (this.gt.mode !== 'move') {
              return this.getTargetNode(event);
            } else {
              return null;
            }
          }),
          distinctUntilChanged(),
        )
        .subscribe(node => {
          // this.gtNodeHover.emit(node);
          this.ngZone.run(() => this.gtNodeHover.emit(node));
        });
    });
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.resetPosition();
    } else {
      this.page.nativeElement.style.width = '800px';
      this.page.nativeElement.style.minHeight = '1000px';
      this.page.nativeElement.style.marginLeft = 'calc(50% - 400px)';
      this.transform = 'translate(0,60px)';
    }
  }

  init() {
    this.template.clear();
    if (this.gt.gt) {
      this.template.insert(this.gt.gt);
    }
  }

  updateTransform(transform: string) {
    this.transform = transform;
    this.cdr.detectChanges();
  }

  resetPosition() {
    const containerWidth = this.viewContainerRef.element.nativeElement.offsetWidth;
    const containerHeight = this.viewContainerRef.element.nativeElement.offsetHeight;
    this.page.nativeElement.style.width = Math.min(containerWidth - 100, 800) + 'px';
    this.page.nativeElement.style.minHeight = Math.max(containerHeight - 100, 1000) + 'px';
    this.transform = `matrix(1,0,0,1,${
      (this.direction.value === 'ltr' ? 1 : -1) *
      Math.max(containerWidth / 2 - this.page.nativeElement.offsetWidth / 2, 50)
    },60)`;

    this.cdr.detectChanges();
  }

  getTargetNode(event: MouseEvent): GtNode | null {
    const target = closest(event.target as HTMLElement, '.gt-node');
    if (!target) {
      return null;
    }
    const targetId = target.dataset.id;
    return this.gt.getNodeById(targetId!);
  }

  initDragEvent() {
    const drag = new Drag<{
      mirror: HTMLElement;
      placeholder: HTMLElement;
      target: HTMLElement;
    }>(this.el.nativeElement, this._document);
    const gt = this.gt;
    Object.defineProperty(drag, 'disabled', {
      get(): any {
        return gt.mode === 'move';
      },
    });
    drag.drop.subscribe(({ parentElement, refChild, target, placeholder }) => {
      const beforePositions = Array.prototype.filter
        .call(parentElement.children, child => child !== target)
        .map(child => child.getBoundingClientRect());
      parentElement.insertBefore(target, refChild);
      const rect = target.getBoundingClientRect();
      const afterPositions = Array.prototype.filter
        .call(parentElement.children, child => child !== target)
        .map(child => child.getBoundingClientRect());
      Array.prototype.filter
        .call(parentElement.children, child => child !== target)
        .forEach((child, index) => {
          this.translateAnimation.add({
            element: child,
            from: {
              left: beforePositions[index].left - afterPositions[index].left,
              top: beforePositions[index].top - afterPositions[index].top,
            },
          });
        });
      placeholder.style.width = rect.width + 'px';
      placeholder.style.height = rect.height + 'px';
      this.translateAnimation.add({
        element: placeholder,
        to: {
          left: rect.left,
          top: rect.top,
        },
      });
    });
    drag.dragEnd.subscribe(({ parentElement, refChild, target }) => {
      // console.log(parentElement, refChild, target);
      const targetID = target.dataset.id!;
      const parentID = findGtElement(parentElement)!.dataset.id!;
      const targetNode = this.gt.getNodeById(targetID);
      const parentNode = this.gt.getNodeById(parentID);
      const refNode = refChild && refChild.dataset.id ? this.gt.getNodeById(refChild.dataset.id) : null;

      if (!targetNode || !parentNode) {
        console.error('something wrong!');
        return;
      }
      this.gt.moveNode(
        targetNode,
        parentNode,
        refNode ? parentNode.children.indexOf(refNode) : undefined,
        parentElement.dataset.droppable,
      );
    });
  }
}
