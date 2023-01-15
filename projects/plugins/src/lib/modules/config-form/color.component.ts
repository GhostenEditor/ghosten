import { Component, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { SketchComponent } from 'ngx-color/sketch';

@Component({
  selector: 'properties-color',
  template: ` <div class="input-group" [formGroup]="formGroup" style="flex-wrap: nowrap">
    <span class="input-group-text" [style.backgroundColor]="formControl.value || 'transparent'"> </span>
    <input type="hidden" [formControlName]="formItem.name" />
    <div
      class="form-control text-truncate"
      style="height: calc(2.5rem - 2px);"
      [class.disabled]="disabled"
      (click)="showColorPicker()"
    >
      {{ formControl.value }}
    </div>
  </div>`,
})
export class ColorComponent {
  @Input() disabled: boolean;
  color = 'transparent';

  @Input() set value(color: string) {
    if (color) {
      this.color = color;
    } else {
      this.color = '';
    }
  }

  @Output() onchange = new EventEmitter<string>();

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    @Inject('FormItem') public formItem: any,
    public formControl: FormControl,
    public formGroup: FormGroup,
  ) {}

  showColorPicker() {
    const overlayRef = this.overlay.create({
      width: '16rem',
      hasBackdrop: true,
      backdropClass: '',
      disposeOnNavigation: true,
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef.nativeElement)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 8,
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8,
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
            offsetY: -8,
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
            offsetY: -8,
          },
        ]),
    });
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    const componentRef = overlayRef.attach(new ComponentPortal(SketchComponent));
    componentRef.instance.onChangeComplete.subscribe(value => {
      const { r, g, b, a } = value.color.rgb;
      const color = a === 1 ? value.color.hex : `rgba(${r}, ${g}, ${b}, ${a})`;
      this.color = color;
      this.formControl.setValue(color);
    });
    // componentRef.instance.width = 300;
  }
}
