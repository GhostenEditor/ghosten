import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  Type,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataBinding } from '@ghosten/common';

import { Subscription, merge, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { FormEvent, FormItem } from './types';
import { BorderComponent } from './components/border.component';
import { ButtonComponent } from './components/button.component';
import { ColorComponent } from './components/color.component';
import { DataBindingComponent } from './components/data-binding.component';
import { FourNumbersComponent } from './components/four-numbers.component';
import { IconComponent } from './components/icon.component';
import { InputComponent } from './components/input.component';
import { ObjectComponent } from './components/object.component';
import { SelectComponent } from './components/select.component';
import { TableComponent } from './components/table.component';
import { TemplateDirective } from './template.directive';
import { TextareaComponent } from './components/textarea.component';
import { ToggleComponent } from './components/toggle.component';
import { UnitInputComponent } from './components/unit-input.component';

@Component({
  selector: 'properties-form-group',
  template: ` <div class="row mb-2" [formGroup]="formGroup">
    <label
      class="col-4 col-form-label text-truncate pe-0"
      [title]="formItem.label || formItem.name"
      >{{ formItem.label || formItem.name }}</label
    >
    <div class="col-8 position-relative" [class.invalid]="formControl.invalid">
      <div class="form-item" [ngSwitch]="formItem.type">
        <ng-template template-directive></ng-template>
      </div>
      <button
        type="button"
        class="btn btn-light btn-sm"
        *ngIf="formItem.inherit !== undefined"
        style="position: absolute;left: -1.5rem;top: 0.2rem;width: auto;"
        [class.active]="formItem.inherit"
        [disabled]="formItem.inherit"
        (click)="inheritClick.emit({formItem,formControl})"
      >
        <i class="gt-icon prepend-icon">{{ 'bind' }}</i>
      </button>
      <button
        type="button"
        class="btn btn-light btn-sm"
        style="position: absolute;right: -1rem;top: 0.2rem;width: auto;"
        *ngIf="formItem.canBind"
        (click)="dataBindClick.emit({formItem,formControl})"
      >
        B
      </button>
    </div>
  </div>`,
})
export class FormGroupComponent implements OnInit, OnDestroy {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  @Output() inheritClick = new EventEmitter<FormEvent>();
  @Output() dataBindClick = new EventEmitter<FormEvent>();
  @Output() dataReset = new EventEmitter<FormEvent>();
  private subscription = Subscription.EMPTY;

  constructor(
    @Inject('FormItem') public formItem: FormItem,
    public formControl: FormControl,
    public formGroup: FormGroup,
  ) {}

  ngOnInit() {
    this.subscription = merge(
      this.formControl.valueChanges,
      of(this.formControl.value),
    )
      .pipe(
        map(value => value instanceof DataBinding),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        this.template.remove();
        const component = this.getComponentByType(this.formItem.type);
        if (!component) {
          return;
        }
        this.template.insert(this.formItem, component, [
          { provide: FormGroup, useValue: this.formGroup },
          { provide: FormControl, useValue: this.formControl },
          { provide: 'FormItem', useValue: this.formItem },
        ]);
      });
    // componentRef.instance.dataReset.subscribe(() => this.dataReset.emit(this.formItem));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getComponentByType(type: string): Type<any> | undefined {
    if (this.formControl.value instanceof DataBinding) {
      return DataBindingComponent;
    }
    switch (type) {
      case 'numberHasUnit':
        return UnitInputComponent;
      case 'fourNumbers':
        return FourNumbersComponent;
      case 'table':
        return TableComponent;
      case 'object':
        return ObjectComponent;
      case 'select':
        return SelectComponent;
      case 'text':
      case 'number':
        return InputComponent;
      case 'icon':
        return IconComponent;
      case 'textarea':
        return TextareaComponent;
      case 'color':
        return ColorComponent;
      case 'border':
        return BorderComponent;
      case 'toggle':
        return ToggleComponent;
      case 'button':
        return ButtonComponent;
    }
    return undefined;
  }
}
