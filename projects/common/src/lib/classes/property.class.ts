import { Observable, Subscription } from 'rxjs';

import { DataBinding } from './data-binding.class';
import { DataSourcePicker } from './data-source-picker';
import { cloneDeep } from '../utils';

export class Property {
  private _dataSourceMap$: Map<string, Observable<any>>;
  private _subscriptions: Subscription[];

  [property: string]: any;

  get(key: string) {
    return this[key] instanceof DataSourcePicker ? null : this[key];
  }

  set(key: string, value: any) {
    this[key] = value;
    // Object.assign(this.property, property);
  }

  export(): Record<string, any> {
    return Object.entries(this).reduce<any>((acc, [key, value]) => {
      if (value instanceof DataSourcePicker) {
        acc[key] = `[DataSourcePicker]${value.sourceID}`;
      } else if (value instanceof DataBinding) {
        acc[key] = `[DataBinding]${value.data}`;
      } else {
        acc[key] = cloneDeep(value);
      }
      return acc;
    }, {});
  }

  static create<T>(property: any, parent: Property = new Property()): Property & T {
    const newProperty = Object.create(parent);
    for (const key in property) {
      if (/^\[DataSourcePicker]:/.test(property[key])) {
        property[key] = new DataSourcePicker(property[key].replace('[DataSourcePicker]', ''));
      } else if (/^\[DataBinding]/.test(property[key])) {
        property[key] = new DataBinding(property[key].slice(13));
      }
    }
    Object.assign(newProperty, property);
    return newProperty;
  }

  setDataSource(dataSourceMap$: Map<string, Observable<any>>) {
    Object.defineProperty(this, '_dataSourceMap$', {
      value: dataSourceMap$,
      enumerable: false,
    });
    if (!this._subscriptions) {
      Object.defineProperty(this, '_subscriptions', {
        value: [],
        enumerable: false,
      });
    }
    Object.entries(this).forEach(([key, value]) => {
      if (value instanceof DataSourcePicker) {
        this[key] = null;
        const dataSource = this._dataSourceMap$.get(value.sourceID)!;
        this._subscriptions.push(dataSource.subscribe(res => (this[key] = res)));
      }
    });
  }

  clear() {
    for (const key in this) {
      delete this[key];
    }
    this._dataSourceMap$.clear();
    if (this._subscriptions) {
      this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }
}
