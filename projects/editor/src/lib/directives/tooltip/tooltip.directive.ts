import {
  ApplicationRef,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  createComponent,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TooltipComponent } from './tooltip.component';

@Directive({ selector: '[tooltip]' })
export class TooltipDirective {
  static tooltipRef: ComponentRef<TooltipComponent> | null = null;
  static showTimerSubscription = Subscription.EMPTY;
  static hideTimerSubscription = Subscription.EMPTY;
  @Input() tooltipTitle: string;
  @Input() tooltipPosition: 'top' | 'bottom' | 'start' | 'end' = 'end';

  @HostListener('mouseenter', ['$event']) mouseenter(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.tooltipTitle) {
      return;
    }
    if (!TooltipDirective.tooltipRef) {
      TooltipDirective.tooltipRef = createComponent(TooltipComponent, {
        environmentInjector: this.appRef.injector,
      });
    }
    const instance = TooltipDirective.tooltipRef!.instance;
    const containerRect = this.elementRef.nativeElement.getBoundingClientRect();

    if (instance.showing) {
      instance.setTitle(this.tooltipTitle);
      instance.setPosition(this.tooltipPosition);
      instance.updatePosition(containerRect);
    } else {
      TooltipDirective.showTimerSubscription = timer(400).subscribe(() => {
        instance.setTitle(this.tooltipTitle);
        instance.setPosition(this.tooltipPosition);
        instance.fadeIn(containerRect);
      });
    }
    TooltipDirective.hideTimerSubscription.unsubscribe();
    TooltipDirective.hideTimerSubscription = Subscription.EMPTY;
  }

  @HostListener('mouseleave', ['$event']) mouseleave(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const instance = TooltipDirective.tooltipRef!.instance;
    TooltipDirective.hideTimerSubscription = timer(50).subscribe(() =>
      instance.fadeOut(),
    );
    TooltipDirective.showTimerSubscription.unsubscribe();
    TooltipDirective.showTimerSubscription = Subscription.EMPTY;
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private appRef: ApplicationRef,
  ) {}
}
