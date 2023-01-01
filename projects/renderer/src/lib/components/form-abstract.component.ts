import {
  AfterViewInit,
  Component,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { FormControl, NgModel, ValidationErrors } from '@angular/forms';
import { DataBinding } from '@ghosten/common';

import { take, tap } from 'rxjs';

import { RenderAbstractComponent } from './abstract.component';
import { getValidatorsFromGtNode } from '../utils';

@Component({
  selector: 'gt-form-abstract',
  template: '',
})
export class FormAbstractComponent<T>
  extends RenderAbstractComponent<T>
  implements AfterViewInit {
  @ViewChild('ngModel') ngModel: NgModel;

  @HostBinding('class.has-error') get hasError() {
    return (
      this.control &&
      this.control.invalid &&
      (this.control.dirty || this.control.touched)
    );
  }

  private errorTextMap: Map<string, string>;

  override afterConstructor() {
    this.errorTextMap = new Map<string, string>();
    if (this.formGroup) {
      const validators = getValidatorsFromGtNode(this.gtNode);
      const name =
        this.gtNode.property.name instanceof DataBinding
          ? this.gtNode.property.name.compile(
              {},
              {
                ...this.directiveContext,
              },
            )
          : this.gtNode.property.name;
      const exitedControl = this.formGroup.get(name) as FormControl;
      if (exitedControl) {
        this.control = exitedControl;
        console.warn(`该表单下已存在name为${name}的表单项`);
        return;
      }
      this.control = new FormControl(
        {
          value: this.gtNode.property.value,
          disabled: this.gtNode.property.disabled,
        },
        {
          validators,
        },
      );
      this.formGroup.setControl(this.gtNode.property.name, this.control);
    }
  }

  override ngAfterViewInit() {
    if (this.ngModel) {
      this.ngZone.onStable
        .pipe(
          take(1),
          tap(() => {
            const validators = getValidatorsFromGtNode(this.gtNode);
            this.ngModel.control.setValidators(validators);
            this.control = this.ngModel.control;
          }),
        )
        .subscribe();
    }
  }

  errorText(errors: ValidationErrors | null): string {
    if (errors === null) {
      return '';
    } else {
      return Object.keys(errors)
        .map(errorType => this.errorTextMap.get(errorType))
        .join(', ');
    }
  }
}
