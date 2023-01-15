import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { GtNode } from '@ghosten/common';

import { FormEvent, FormItem } from '../../types';
import { DropdownItem } from '../../modules';
import { PanelCard } from './card.component';

type ValidatorTypes = 'min' | 'max' | 'required' | 'requiredTrue' | 'email' | 'minLength' | 'maxLength' | 'pattern';

const validatorTypes: DropdownItem[] = [
  { text: 'min' },
  { text: 'max' },
  { text: 'required' },
  { text: 'requiredTrue' },
  { text: 'email' },
  { text: 'minLength' },
  { text: 'maxLength' },
  { text: 'pattern' },
];

interface ValidatorItem extends PanelCard {
  title: string;
  formList: FormItem[];
  value: Record<string, any>;
}

@Component({
  selector: 'gt-panel-validator',
  template: `
    <div cdkDropList (cdkDropListDropped)="dropped($event)">
      <gt-panel-card *ngFor="let validator of validators" [item]="validator" (removeItem)="removeValidator(validator)">
        <config-form [formList]="validator.formList" (formChange)="formChange(validator, $event)"></config-form>
      </gt-panel-card>
    </div>
    <div class="d-grid gap-2 mt-2">
      <button
        class="btn btn-light"
        i18n="Button: Add"
        gt-dropdown
        [items]="validatorTypes"
        (itemClick)="addValidator($event.text)"
      >
        添加
      </button>
    </div>
  `,
})
export class PanelValidatorComponent {
  public _gtNode: GtNode;

  @Input() set gtNode(gtNode: GtNode) {
    this._gtNode = gtNode;
    this.validators = gtNode.validator!.map(({ type, value }) => ({
      title: type,
      formList: getFormListByValidatorType(type as ValidatorTypes, value),
      value,
    }));
  }

  get gtNode() {
    return this._gtNode;
  }

  @ViewChild('dropdown', { static: true }) dropdown: TemplateRef<HTMLElement>;
  validators: ValidatorItem[] = [];
  validatorTypes = validatorTypes;

  formChange(validator: ValidatorItem, event: FormEvent) {
    validator.value = event.formControl.root.value;
    this.updateGtNodeValidator();
  }

  addValidator(type: string) {
    const formList = getFormListByValidatorType(type);
    this.validators.push({
      title: type,
      formList,
      value: {},
    });
    this.updateGtNodeValidator();
  }

  removeValidator(validator: ValidatorItem) {
    this.validators.splice(this.validators.indexOf(validator), 1);
    this.updateGtNodeValidator();
  }

  updateGtNodeValidator() {
    this.gtNode.validator = this.validators.map(validator => ({
      type: validator.title,
      value: validator.value,
    }));
  }

  dropped(event: CdkDragDrop<void>) {
    moveItemInArray(this.validators, event.previousIndex, event.currentIndex);
    moveItemInArray(this.gtNode.validator!, event.previousIndex, event.currentIndex);
  }
}

function getFormListByValidatorType(type: string, data: Record<string, any> = {}): FormItem[] {
  switch (type) {
    case 'min':
      return [
        {
          type: 'number',
          name: 'min',
          value: data.min,
        },
        {
          type: 'text',
          name: 'errorText',
          value: data.errorText,
        },
      ];
    case 'max':
      return [
        {
          type: 'number',
          name: 'max',
          value: data.max,
        },
        {
          type: 'text',
          name: 'errorText',
          value: data.errorText,
        },
      ];
    case 'required':
    case 'requiredTrue':
    case 'email':
      return [
        {
          type: 'text',
          name: 'errorText',
          value: data.errorText,
        },
      ];
    case 'minLength':
      return [
        {
          type: 'number',
          name: 'minLength',
          value: data.minLength,
        },
        {
          type: 'text',
          name: 'errorText',
          value: data.errorText,
        },
      ];
    case 'maxLength':
      return [
        {
          type: 'number',
          name: 'maxLength',
          value: data.maxLength,
        },
        {
          type: 'text',
          name: 'errorText',
          value: data.errorText,
        },
      ];
    case 'pattern':
      return [
        {
          type: 'text',
          name: 'pattern',
          value: data.pattern,
        },
        {
          type: 'text',
          name: 'errorText',
          value: data.errorText,
        },
      ];
    default:
      return [
        {
          type: 'text',
          name: 'errorText',
          value: data.errorText,
        },
      ];
  }
}
