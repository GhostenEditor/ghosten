import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output, Type, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataBinding } from '@ghosten/common';

import { Subscription, merge, of } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { FormEvent, FormItem } from '../../types';
import { DataBindingComponent } from './components/data-binding.component';
import { GT_CONFIG_FORM_TYPE_MAP } from '../../injectors';
import { InputComponent } from './components/input.component';
import { TemplateDirective } from './template.directive';

@Component({
  selector: 'config-form-group',
  template: ` <div class="row mb-2" [formGroup]="formGroup">
    <label class="col-4 col-form-label text-truncate pe-0" [title]="formItem.label || formItem.name">{{
      formItem.label || formItem.name
    }}</label>
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
        <i class="gt-icon">{{ 'bind' }}</i>
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
    @Inject(GT_CONFIG_FORM_TYPE_MAP)
    private formTypeMapCollection: Record<string, Type<any>>[],
    public formControl: FormControl,
    public formGroup: FormGroup,
  ) {}

  ngOnInit() {
    const formTypeMap = this.formTypeMapCollection.reduce((acc, cur) => Object.assign(acc, cur), {});
    this.subscription = merge(this.formControl.valueChanges, of(this.formControl.value))
      .pipe(
        map(value => value instanceof DataBinding),
        distinctUntilChanged(),
      )
      .subscribe(() => {
        this.template.remove();
        const component =
          this.formControl.value instanceof DataBinding
            ? DataBindingComponent
            : formTypeMap[this.formItem.type] || InputComponent;
        if (!component) {
          return;
        }
        this.template.insert(component, [
          { provide: FormGroup, useValue: this.formGroup },
          { provide: FormControl, useValue: this.formControl },
          { provide: 'FormItem', useValue: this.formItem },
        ]);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
