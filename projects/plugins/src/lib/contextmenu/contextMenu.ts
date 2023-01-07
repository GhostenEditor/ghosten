import {
  Component,
  Directive,
  EventEmitter,
  Injectable,
  Injector,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ComponentPortal } from '@angular/cdk/portal';

import {
  debounceTime,
  distinctUntilKeyChanged,
  takeUntil,
} from 'rxjs/operators';
import { fromEvent } from 'rxjs';

export class Menu {
  label?: string | number;
  disabled?: boolean;
  divider?: boolean;
  children?: Menu[];
  active?: boolean;
  checked?: boolean;
  desc?: string;

  onclick?(menu: Menu, event: MouseEvent): void;
}

// const Menu_Data = new InjectionToken('Menu Data');
// const Menu_Level = new InjectionToken('Menu Level');

declare const window: Window;

const fadeAnimation = trigger('fade', [
  state('in', style({ opacity: 1 })),
  transition('void => *', [style({ opacity: 0 }), animate('200ms ease-out')]),
]);

@Component({
  selector: 'gt-context-menu',
  // template: '',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  animations: [fadeAnimation],
  host: {
    '(pointerdown)': 'preventDefault($event)',
    // '(wheel)': 'preventDefault($event)',
  },
  template: `
    <!--    <div class="scroll-up">上</div>-->
    <!--    <div class="scroll-down">下</div>-->
    <div
      [@fade]="'in'"
      class="dropdown-menu show shadow"
      style="position:static;"
    >
      <ng-container *ngFor="let menu of menus; let i = index">
        <hr *ngIf="menu.divider" class="dropdown-divider" />
        <a
          *ngIf="!menu.divider"
          class="dropdown-item d-flex justify-content-between"
          href="javascript:void(0);"
          [class.active]="menu.active"
          [class.disabled]="menu.disabled"
          (click)="onClick(menu, $event)"
          (mouseenter)="mouseenter($event, menu)"
        >
          <i class="check-icon" *ngIf="menu.checked"></i>
          <span class="text-main">{{ menu.label }}</span>
          <small class="text-desc text-muted ms-3" *ngIf="menu.desc">{{
            menu.desc
          }}</small>
          <i *ngIf="menu.children" class="caret"></i
        ></a>
      </ng-container>
    </div>
  `,
})
export class ContextMenuComponent {
  public menus: Menu[];
  public level: number;

  constructor(private menu: ContextMenu) {}

  preventDefault(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  mouseenter(event: MouseEvent, menu: Menu) {
    event.stopPropagation();
    event.preventDefault();
    fromEvent(event.target as HTMLElement, 'mousemove')
      .pipe(
        distinctUntilKeyChanged('target'),
        debounceTime(200),
        takeUntil(fromEvent(event.target as HTMLElement, 'mouseleave')),
      )
      .subscribe(() => {
        const { children, disabled } = menu;
        this.menu.create(
          event as any,
          disabled ? [] : children ? children : [],
          this.level + 1,
        );
      });
  }

  onClick(menu: Menu, event: MouseEvent) {
    event.stopPropagation();
    if (menu.disabled || (menu.children && menu.children.length)) {
      return event.stopPropagation();
    } else {
      if (menu.onclick) {
        menu.onclick(menu, event);
      }
      this.menu.destroy();
    }
  }
}

const withPositions: ConnectedPosition[] = [
  {
    originX: 'end',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'top',
    // offsetX: 0,
    // offsetY: -6
  },
  {
    originX: 'start',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'top',
  },
  {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom',
  },
];

@Directive()
@Injectable()
export class ContextMenu {
  @Output() onclick = new EventEmitter();
  private overlayRefs: any[] = [];
  private currentMenus: any[] = [];

  // private currentLevel = -1;

  constructor(private injector: Injector, private overlay: Overlay) {}

  create(event: MouseEvent, menus: Menu[], level = 0) {
    if (this.overlayRefs.length === 0) {
      this.bindEvents();
    }
    if (this.currentMenus.indexOf(menus) > -1) {
      return;
    }
    // this.currentLevel = level;
    this.overlayRefs
      .splice(level, this.overlayRefs.length)
      .forEach((or: OverlayRef) => or.dispose());
    this.currentMenus.splice(level, this.overlayRefs.length);
    if (menus && menus.length) {
      this.currentMenus.push(menus);
      const injector = Injector.create({
        providers: [
          // {provide: Menu_Data, useValue: menus},
          // {provide: Menu_Level, useValue: level},
        ],
        parent: this.injector,
      });
      const componentPortal = new ComponentPortal(
        ContextMenuComponent,
        null,
        injector,
      );
      const overlayRef = this.overlay.create({
        disposeOnNavigation: true,
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(level === 0 ? event : (event.target as any))
          .withPositions(withPositions),
      });
      const componentRef = overlayRef.attach(componentPortal);
      componentRef.instance.menus = menus;
      componentRef.instance.level = level;
      this.overlayRefs.push(overlayRef);
    }
  }

  destroy = () => {
    this.overlayRefs.forEach(overlayRef => {
      overlayRef.dispose();
    });
    this.overlayRefs = [];
    this.unbindEvents();
  };

  private bindEvents() {
    window.addEventListener('pointerdown', this.destroy, {
      once: true,
      capture: false,
    });
    window.addEventListener('wheel', this.destroy, {
      once: true,
      capture: true,
    });
    window.addEventListener('blur', this.destroy, {
      once: true,
      capture: true,
    });
    window.addEventListener('resize', this.destroy, {
      once: true,
      capture: true,
    });
  }

  private unbindEvents() {
    window.removeEventListener('pointerdown', this.destroy);
    window.removeEventListener('wheel', this.destroy);
    window.removeEventListener('blur', this.destroy);
    window.removeEventListener('resize', this.destroy);
  }
}
