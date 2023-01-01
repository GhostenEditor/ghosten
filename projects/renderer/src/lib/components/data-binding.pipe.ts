import {
  ChangeDetectorRef,
  OnDestroy,
  Optional,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { DataBinding, GtNode, executeCode } from '@ghosten/common';
import { Observable, Subscription, isObservable } from 'rxjs';

import { DirectiveContext } from './directive.context';
import { GlobalVariableService } from './global-variable.service';

@Pipe({
  name: 'dataBinding',
  pure: false,
})
export class DataBindingPipe implements OnDestroy, PipeTransform {
  private _subscription: Subscription | null = null;
  private _latestValue: any = null;
  private _obj: Observable<any> | null = null;

  constructor(
    private _cdr: ChangeDetectorRef,
    private gtNode: GtNode,
    @Optional() public directiveContext: DirectiveContext,
    private globalVariable: GlobalVariableService,
  ) {}

  ngOnDestroy() {
    if (this._subscription) {
      this._dispose();
    }
  }

  transform(value: DataBinding | any, ...args: any[]): any {
    if (value instanceof DataBinding) {
      if (!value.compiled) {
        value.compiledData = value.compile(
          {
            ...this.gtNode.variable.reduce<any>((acc, cur) => {
              if (cur.value instanceof DataBinding) {
                cur.value = cur.value.compile({}, this.globalVariable);
              }
              acc[cur.name] = cur.value;
              return acc;
            }, {}),
          },
          this.globalVariable,
        );
        value.compiled = true;
      }
      const result = value.compiledData;
      if (isObservable(result)) {
        if (!this._obj) {
          if (value) {
            this._subscribe(result);
          }
          return this._latestValue;
        }
        if (this._obj !== result) {
          this._dispose();
          return this.transform(value);
        }
        return this._latestValue;
      } else {
        return result;
      }
    } else if (typeof value === 'string') {
      if (/\${.+?}/.test(value)) {
        return this.executeStringCode(value);
      }
      return value;
    } else {
      return value;
    }
  }

  private _subscribe(obj: Observable<any>): void {
    this._obj = obj;
    this._subscription = obj.subscribe(value =>
      this._updateLatestValue(obj, value),
    );
  }

  private _updateLatestValue(async: any, value: Object): void {
    if (async === this._obj) {
      this._latestValue = value;
      this._cdr.markForCheck();
    }
  }

  private _dispose(): void {
    this._latestValue = null;
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
    this._obj = null;
  }

  private executeStringCode(code: string) {
    return executeCode(code, {}, this.globalVariable);
  }
}
