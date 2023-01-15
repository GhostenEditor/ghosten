import { ContentChild, Directive, ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';

import { Subscription, animationFrames, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { EventsService } from '../../services';
import { GtEdit } from '../../classes';
import { drawLayout } from './page-structure';

@Directive({
  selector: '[page-structure-source]',
})
export class PageStructureSourceDirective {}

@Directive({
  selector: '[page-structure]',
})
export class PageStructureDirective implements OnInit, OnDestroy {
  @ContentChild(PageStructureSourceDirective, {
    static: true,
    read: ElementRef,
  })
  private gtPage: ElementRef<HTMLElement>;

  private subscription: Subscription = Subscription.EMPTY;

  constructor(
    private el: ElementRef<HTMLElement>,
    private events: EventsService,
    private render: Renderer2,
    private gt: GtEdit,
    private ngZone: NgZone,
    private direction: Directionality,
  ) {}

  ngOnInit() {
    if (!this.gtPage) {
      throw new Error();
    }
    const container = this.el.nativeElement;
    const gtPage = this.gtPage.nativeElement;
    const canvas: HTMLCanvasElement = this.render.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.classList.add('position-absolute');
    canvas.classList.add('pe-none');
    canvas.style.setProperty('z-index', '1');
    this.render.insertBefore(container.parentElement, canvas, container);

    this.ngZone.runOutsideAngular(() => {
      this.subscription = merge(
        this.events.CHANGE_SELECT,
        animationFrames(),
        this.events.BLACKBOARD_RESIZE.pipe(debounceTime(20)),
      ).subscribe(() => {
        const nodes: { element: HTMLElement; type: string }[] = [];
        const activeNodes: {
          element: HTMLElement;
          text1: string;
          text2: string;
        }[] = [];
        this.gt.currentBoard!.nodeList.forEach(gtNode => {
          if (gtNode.componentRef) {
            nodes.push({
              element: gtNode.componentRef.location.nativeElement,
              type: gtNode.type,
            });
          }
        });
        this.gt.selected.forEach(gtNode => {
          if (gtNode.componentRef) {
            const element = gtNode.componentRef.location.nativeElement as HTMLElement;
            activeNodes.push({
              element,
              text1: gtNode.type.toUpperCase(),
              text2: gtNode.directive.map(directive => directive.type).join(','),
            });
          }
        });
        drawLayout(ctx, container, gtPage, nodes, activeNodes, {
          drawAll: this.gt.mode === 'edit' && this.gt.showReferenceLine,
          drawActive: this.gt.mode === 'edit',
          darkMode: this.gt.darkMode,
          direction: this.direction.value,
        });
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
