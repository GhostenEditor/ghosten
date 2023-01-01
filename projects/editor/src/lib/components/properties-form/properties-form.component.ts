import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
// import { DataSourcePicker } from '@ghosten/common';

import { Subscription, merge } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

import { FormEvent, FormItem } from './types';
import { FormControlService } from './form-control.service';
import { FormGroupComponent } from './form-group.component';
import { TemplateDirective } from './template.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'properties-form',
  template: '<ng-template template-directive></ng-template>',
  providers: [FormControlService],
})
export class PropertiesFormComponent implements OnDestroy {
  @ViewChild(TemplateDirective, { static: true }) template: TemplateDirective;
  public formGroup: UntypedFormGroup = new UntypedFormGroup({});
  // private _differ: IterableDiffer<FormItem> = this.iterableDiffers.find([]).create<FormItem>((index, item) => item.value instanceof DataSourcePicker ? item.value : item.type + item.name);
  private _differ: IterableDiffer<FormItem> = this.iterableDiffers
    .find([])
    .create<FormItem>((index, item) => item.type + '-' + item.name);
  private _subscriptions = new Map<string, Subscription>();

  @Input()
  set formList(formList: FormItem[]) {
    const changes = this._differ.diff(formList);
    if (changes) {
      changes.forEachOperation(
        ({ item, previousIndex }, adjustedPreviousIndex, currentIndex) => {
          const controlValue = item.value === undefined ? null : item.value;
          if (previousIndex === null) {
            const formControl = new UntypedFormControl(controlValue, {
              validators: item.validator,
              updateOn: item.updateOn,
            });
            this.formGroup.addControl(item.name, formControl);
            const { instance } = this.template.insert(
              item,
              FormGroupComponent,
              [
                { provide: UntypedFormGroup, useValue: this.formGroup },
                { provide: UntypedFormControl, useValue: formControl },
                { provide: 'FormItem', useValue: item },
              ],
              currentIndex!,
            );
            this._subscriptions.set(
              item.name,
              merge(
                formControl.valueChanges.pipe(
                  // distinctUntilChanged(),
                  // todo 临时修复formControl触发change事件无法更新formGroup的值的bug
                  debounceTime(10),
                  tap(value => {
                    item.value = value;
                    this.formChange.emit({ formItem: item, formControl });
                  }),
                ),
                instance.dataBindClick.pipe(
                  tap(data => this.dataBindClick.emit(data)),
                ),
                instance.inheritClick.pipe(
                  tap(data => this.inheritClick.emit(data)),
                ),
                instance.dataReset.pipe(),
              ).subscribe(),
            );
          } else if (currentIndex === null) {
            this.formGroup.removeControl(item.name);
            this.template.remove(
              adjustedPreviousIndex === null
                ? undefined
                : adjustedPreviousIndex,
            );
            this._subscriptions.get(item.name)!.unsubscribe();
          } else if (adjustedPreviousIndex !== null) {
            const view = this.template.viewContainerRef.get(
              adjustedPreviousIndex,
            )!;
            this.template.move(view, currentIndex);
          }
        },
      );
    }
    formList.forEach(({ name, value = null }) => {
      const formControl = this.formGroup.get(name);
      if (formControl) formControl.setValue(value, { emitEvent: false });
    });
  }

  @Output() formChange = new EventEmitter<FormEvent>();
  @Output() formClick = new EventEmitter<FormEvent>();
  @Output() dataBindClick = new EventEmitter<FormEvent>();
  @Output() inheritClick = new EventEmitter<FormEvent>();
  @Output() dataReset = new EventEmitter<FormEvent>();

  constructor(
    private iterableDiffers: IterableDiffers,
    private formControlService: FormControlService,
  ) {
    this.formControlService.buttonClick.subscribe(formItem =>
      this.formClick.emit({
        formItem,
        formControl: this.formGroup.get(formItem.name) as any,
      }),
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
    this._subscriptions.clear();
  }
}
