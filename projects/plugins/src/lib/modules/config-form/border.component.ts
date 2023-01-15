import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';

@Component({
  selector: 'properties-border',
  template: ` <div class="border-box mb-2">
      <div class="border-item border-all" [class.active]="active === 'all'" (click)="switchBorder('all')"></div>
      <div class="border-item border-left " [class.active]="active === 'left'" (click)="switchBorder('left')"></div>
      <div class="border-item border-top" [class.active]="active === 'top'" (click)="switchBorder('top')"></div>
      <div class="border-item border-right" [class.active]="active === 'right'" (click)="switchBorder('right')"></div>
      <div
        class="border-item border-bottom"
        [class.active]="active === 'bottom'"
        (click)="switchBorder('bottom')"
      ></div>
    </div>
    <div class="mb-2 input-group input-group-sm" style="flex-wrap: nowrap">
      <button
        class="btn btn-outline-secondary"
        type="button"
        [disabled]="!active"
        (click)="showDropdown($event, 'borderStyle')"
      >
        <i class="gt-icon">{{ borderIconMap[borderStyle] }}</i>
      </button>
      <input
        type="text"
        class="form-control"
        title=""
        size="1"
        name=""
        [disabled]="!active || borderStyle === 'none'"
        [(ngModel)]="borderWidth"
        (ngModelChange)="changeWidth(borderWidth)"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        [disabled]="!active || borderStyle === 'none'"
        (click)="showDropdown($event, 'borderUnit')"
      >
        {{ borderUnit }}
      </button>
    </div>
    <properties-color
      [value]="borderColor"
      [disabled]="!active || borderStyle === 'none'"
      (onchange)="changeColor($event)"
    ></properties-color>
    <ng-template #dropdown let-items="items" let-active="active" let-type="type">
      <ul class="dropdown-menu" style="display: block;min-width: auto;position: static;">
        <li *ngFor="let item of items" (click)="changeDropdown(type, item)" [class.active]="item === active">
          <a class="dropdown-item" [class.active]="item === active" href="javascript:void(0)">{{ item }}</a>
        </li>
      </ul>
    </ng-template>`,
})
export class BorderComponent {
  @Output() onchange = new EventEmitter<any>();
  @ViewChild('dropdown') dropdown: TemplateRef<any>;
  private overlayRef: OverlayRef | null = null;
  units = ['px', '%', 'em'];
  active = '';
  border = {
    left: '1px solid #ccc',
    top: '2px dashed #000',
    right: '3px dotted pink',
    bottom: '3px none red',
    all: '3px dashed #123456',
  };
  borderWidth: string | null;
  borderStyle: string;
  borderColor: string;
  borderUnit: string | null;
  borderStyles = ['solid', 'dashed', 'dotted', 'none'];
  borderIconMap: any = {
    solid: 'solid_line',
    dashed: 'dashed_line',
    dotted: 'dotted_line',
    none: 'close',
  };
  borderWidthDisabled: boolean;
  borderColorDisabled: boolean;

  @Input() set value(border: any) {
    this.border = border || {};
  }

  constructor(
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    @Inject('FormItem') public formItem: any,
    public formControl: FormControl,
    public formGroup: FormGroup,
  ) {}

  switchBorder(type: 'left' | 'right' | 'top' | 'bottom' | 'all') {
    this.active = type;
    const tmp: string[] = this.border[type] ? this.border[type].split(' ') : [];
    if (tmp[0]) {
      const matcher = tmp[0].match(/\d*/);
      this.borderWidth = matcher ? matcher[0] : null;
      this.borderUnit = tmp[0].replace(/\d*/, '');
    } else {
      this.borderWidth = null;
      this.borderUnit = null;
    }
    this.borderStyle = tmp[1] || 'none';
    this.borderColor = tmp[2];
  }

  changeColor(color: string) {
    this.borderColor = color;
    this.change();
  }

  changeWidth(width: string | null) {
    this.borderWidth = width;
    this.change();
  }

  changeStyle(style: any) {
    if (style === 'none') {
      this.borderWidthDisabled = true;
      this.borderColorDisabled = true;
    } else {
      this.borderWidthDisabled = false;
      this.borderColorDisabled = false;
    }
    this.borderStyle = style.value;
    this.change();
  }

  change() {
    // @ts-ignore
    this.border[this.active] = [
      // @ts-ignore
      this.borderWidth + this.borderUnit,
      this.borderStyle,
      this.borderColor,
    ].join(' ');
    this.formItem.value = this.border;
    this.formGroup.get(this.formItem.name!)!.setValue(this.formItem.value);
    this.onchange.emit(this.border);
  }

  showDropdown(event: MouseEvent, type: 'borderStyle' | 'borderUnit') {
    const context: any = { type };
    switch (type) {
      case 'borderStyle':
        context.items = this.borderStyles;
        context.active = this.borderStyle;
        break;
      case 'borderUnit':
        context.items = this.units;
        context.active = this.borderUnit;
    }
    const templatePortal = new TemplatePortal(this.dropdown, this.vcr, context);
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: '',
      disposeOnNavigation: true,
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(event.target as HTMLElement)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          },
        ]),
    });
    this.overlayRef.attach(templatePortal);
    this.overlayRef
      .backdropClick()
      .pipe(take(1))
      .subscribe(() => {
        this.overlayRef!.dispose();
        this.overlayRef = null;
      });
  }

  changeDropdown(type: 'borderStyle' | 'borderUnit', item: string) {
    switch (type) {
      case 'borderStyle':
        this.borderStyle = item;
        break;
      case 'borderUnit':
        this.borderUnit = item;
    }
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
    this.change();
  }
}
