import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TemplatePortal } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';

@Component({
  selector: 'properties-unit-input',
  template: `
    <div class="input-group" style="flex-wrap: nowrap" [formGroup]="formGroup">
      <input
        type="number"
        class="form-control"
        title=""
        size="1"
        name=""
        pattern="[0-9]*"
        [(ngModel)]="input"
        [disabled]="disabled"
        [ngModelOptions]="{ standalone: true }"
        (wheel)="onwheel($event)"
        (change)="change()"
      />
      <input
        type="hidden"
        [formControlName]="formItem.name"
        (ngModelChange)="setValue($event)"
      />
      <button
        #unitEl
        class="btn btn-outline-secondary"
        type="button"
        (click)="switchUnit()"
      >
        {{ unit }}
      </button>
    </div>
    <ng-template #dropdown>
      <ul
        class="dropdown-menu"
        style="display: block;min-width: auto;position: static"
      >
        <li
          *ngFor="let u of units"
          (click)="change(u)"
          [class.active]="u === unit"
        >
          <a
            class="dropdown-item"
            [class.active]="u === unit"
            href="javascript:void(0)"
            >{{ u }}</a
          >
        </li>
      </ul>
    </ng-template>
  `,
})
export class UnitInputComponent {
  @ViewChild('dropdown', { static: true }) dropdown: TemplateRef<any>;
  @ViewChild('unitEl', { static: true }) unitEl: ElementRef;
  @Input() disabled: boolean;
  @Output() onchange = new EventEmitter();
  input: string | number;
  unit = '\\';
  units = ['px', '%', 'em', 'rem'];
  private overlayRef: OverlayRef | null;

  constructor(
    private cdf: ChangeDetectorRef,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    @Inject('FormItem') public formItem: any,
    public formControl: UntypedFormControl,
    public formGroup: UntypedFormGroup,
  ) {
    this.setValue(formControl.value);
    this.formControl.valueChanges.subscribe(value => this.setValue(value));
  }

  // @Input() set value(value: string) {
  //   this.setValue(value);
  // }

  setValue(value: string) {
    if (value) {
      this.input = value.match(/([\d.-]|auto)/)
        ? value.match(/([\d.-]+|auto)/)![0]
        : '';
      this.unit = value.match(/(px|%|em|rem|vw|vh)$/)
        ? value.match(/(px|%|em|rem|vw|vh)$/)![0]
        : '\\';
    } else {
      this.input = '';
      this.unit = '\\';
    }
  }

  switchUnit() {
    if (this.disabled) {
      return;
    }
    // noinspection JSDeprecatedSymbols
    const strategy = this.overlay
      .position()
      .flexibleConnectedTo(this.unitEl)
      .withPositions([
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
        { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy: strategy,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      backdropClass: '',
      hasBackdrop: true,
    });
    const userProfilePortal = new TemplatePortal(this.dropdown, this.vcr);
    this.overlayRef.attach(userProfilePortal);
    this.overlayRef
      .backdropClick()
      .pipe(take(1))
      .subscribe(() => this.overlayRef && this.overlayRef.dispose());
  }

  onwheel(event: WheelEvent) {
    if (document.activeElement !== event.target) {
      return;
    }
    event.preventDefault();
    const toNumber = this.input ? +this.input : 0;
    if (!Number.isNaN(toNumber)) {
      this.input = toNumber - Math.sign(event.deltaY);
      this.change();
    }
  }

  change(unit?: string) {
    if (unit !== undefined) {
      this.unit = unit;
    }

    const control = this.formControl;
    if (this.input === 'auto') {
      this.unit = '\\';
      control.setValue(this.input);
      this.onchange.emit(this.input);
    } else {
      control.setValue(this.input + this.unit);
      this.onchange.emit(this.input + this.unit);
    }

    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
    this.cdf.detectChanges();
  }
}
