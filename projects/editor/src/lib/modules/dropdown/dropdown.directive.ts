import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { Subscription, merge } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { DropdownComponent, DropdownItem } from './dropdown.component';

@Directive({ selector: '[gt-dropdown]' })
export class DropdownDirective {
  @Input() items: DropdownItem[];
  @Output() itemClick = new EventEmitter<DropdownItem>();

  @HostListener('click') click() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: '',
      disposeOnNavigation: true,
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            overlayX: 'start',
            overlayY: 'top',
            originX: 'start',
            originY: 'bottom',
            offsetY: 6,
          },
          {
            overlayX: 'start',
            overlayY: 'bottom',
            originX: 'start',
            originY: 'top',
            offsetY: -6,
          },
          {
            overlayX: 'end',
            overlayY: 'bottom',
            originX: 'end',
            originY: 'top',
            offsetY: -6,
          },
          {
            overlayX: 'end',
            overlayY: 'top',
            originX: 'end',
            originY: 'bottom',
            offsetY: 6,
          },
        ]),
    });
    const componentInstance = this.overlayRef.attach(new ComponentPortal(DropdownComponent)).instance;
    componentInstance.items = this.items;
    this.overlaySubscription = merge(
      this.overlayRef.backdropClick(),
      componentInstance.itemClick.pipe(tap(item => this.itemClick.emit(item))),
    )
      .pipe(take(1))
      .subscribe(() => this.closeOverlay());
  }

  private overlayRef: OverlayRef | null = null;
  private overlaySubscription = Subscription.EMPTY;

  constructor(private elementRef: ElementRef<HTMLElement>, private overlay: Overlay) {}

  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlaySubscription.unsubscribe();
      this.overlayRef = null;
      this.overlaySubscription = Subscription.EMPTY;
    }
  }
}
