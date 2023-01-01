import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';

import { Subscription, timer } from 'rxjs';
import { reflow } from '../../utils';

type TooltipPosition = 'top' | 'bottom' | 'start' | 'end';

@Component({
  selector: 'div[tooltip]',
  template: ` <div
    #tooltipContainer
    class="tooltip position-absolute fade"
    style="left: 0; top: 0;"
    [class.show]="fading"
    [ngClass]="'bs-tooltip-' + tooltipPosition"
    [style.transform]="containerMatrix"
    role="tooltip"
  >
    <div
      class="tooltip-arrow position-absolute"
      [style.transform]="arrowMatrix"
      [ngStyle]="{
        top:
          tooltipPosition === 'start' || tooltipPosition === 'end'
            ? '-.4rem'
            : '',
        left:
          tooltipPosition === 'bottom' || tooltipPosition === 'top'
            ? '-.4rem'
            : ''
      }"
    ></div>
    <div class="tooltip-inner">{{ tooltipTitle }}</div>
  </div>`,
})
export class TooltipComponent {
  @ViewChild('tooltipContainer', { static: true })
  tooltipContainer: ElementRef<HTMLElement>;
  @Input() tooltipTitle?: string;
  private _tooltipPosition: TooltipPosition;
  @Input() get tooltipPosition(): TooltipPosition {
    return this._tooltipPosition;
  }

  set tooltipPosition(tooltipPosition: TooltipPosition) {
    if (this.direction.value === 'rtl') {
      switch (tooltipPosition) {
        case 'start':
          this._tooltipPosition = 'end';
          break;
        case 'end':
          this._tooltipPosition = 'start';
          break;
        default:
          this._tooltipPosition = tooltipPosition;
          break;
      }
    } else {
      this._tooltipPosition = tooltipPosition;
    }
  }

  containerMatrix: string;
  public arrowMatrix: string;
  public fading = false;
  private fadingOutSubscription = Subscription.EMPTY;

  public get showing() {
    return !!this.elementRef.nativeElement.parentElement;
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef,
    private direction: Directionality,
  ) {}

  show() {
    if (!this.elementRef.nativeElement.parentElement) {
      this.fadingOutSubscription.unsubscribe();
      this.fadingOutSubscription = Subscription.EMPTY;
      document.body.appendChild(this.elementRef.nativeElement);
    }
    this.cdr.detectChanges();
  }

  hide() {
    if (this.elementRef.nativeElement.parentElement) {
      this.elementRef.nativeElement.parentElement.removeChild(
        this.elementRef.nativeElement,
      );
    }
    this.cdr.detectChanges();
  }

  public setTitle(title: string) {
    this.tooltipTitle = title;
    this.cdr.detectChanges();
  }

  public setPosition(position: 'top' | 'bottom' | 'start' | 'end') {
    this.tooltipPosition = position;
    this.cdr.detectChanges();
  }

  public updatePosition(targetRect: DOMRect) {
    this.fading = true;
    this.fadingOutSubscription.unsubscribe();
    this.fadingOutSubscription = Subscription.EMPTY;
    const tooltipRect =
      this.tooltipContainer.nativeElement.getBoundingClientRect();
    let arrowX = 0;
    let arrowY = 0;
    let containerX: number;
    let containerY: number;
    const maxContainerX = document.body.clientWidth - tooltipRect.width - 5;
    const minContainerX = 5;
    switch (this.tooltipPosition) {
      case 'top':
        arrowX = tooltipRect.width / 2;
        containerY = targetRect.top - tooltipRect.height;
        containerX =
          (targetRect.left + targetRect.right - tooltipRect.width) / 2;
        if (containerX > maxContainerX) {
          const delta = containerX - maxContainerX;
          containerX = maxContainerX;
          arrowX += delta;
        }
        if (containerX < minContainerX) {
          const delta = containerX - minContainerX;
          containerX = minContainerX;
          arrowX += delta;
        }
        break;
      case 'bottom':
        arrowX = tooltipRect.width / 2;
        containerY = targetRect.bottom;
        containerX =
          (targetRect.left + targetRect.right - tooltipRect.width) / 2;
        if (containerX > maxContainerX) {
          const delta = containerX - maxContainerX;
          containerX = maxContainerX;
          arrowX += delta;
        }
        if (containerX < minContainerX) {
          const delta = containerX - minContainerX;
          containerX = minContainerX;
          arrowX += delta;
        }
        break;
      case 'start':
        arrowY = tooltipRect.height / 2;
        containerX = targetRect.left - tooltipRect.width;
        containerY =
          (targetRect.top + targetRect.bottom - tooltipRect.height) / 2;
        break;
      case 'end':
      default:
        arrowY = tooltipRect.height / 2;
        containerX = targetRect.right;
        containerY =
          (targetRect.top + targetRect.bottom - tooltipRect.height) / 2;
    }
    arrowX = Math.round(arrowX);
    arrowY = Math.round(arrowY);
    containerX = Math.round(containerX);
    containerY = Math.round(containerY);
    this.arrowMatrix = `matrix(1,0,0,1,${arrowX},${arrowY})`;
    this.containerMatrix = `matrix(1,0,0,1,${containerX},${containerY})`;
    this.cdr.detectChanges();
  }

  fadeIn(targetRect: DOMRect) {
    this.cdr.detectChanges();
    this.show();
    this.updatePosition(targetRect);
    this.fading = false;
    this.hide();
    this.show();
    reflow(this.tooltipContainer.nativeElement);
    this.fading = true;
    this.cdr.detectChanges();
  }

  fadeOut() {
    this.fading = false;
    this.cdr.detectChanges();
    this.fadingOutSubscription = timer(150).subscribe(() => this.hide());
  }
}
