import { Component } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'form[gt-form]',
  template: '<ng-template gtTemplate></ng-template>',
})
export class FormComponent extends RenderAbstractComponent {
  public reset() {
    this.formGroup.reset();
  }

  public validate() {
    Object.values(this.formGroup.controls).forEach(control =>
      control.markAsTouched(),
    );
  }
}
