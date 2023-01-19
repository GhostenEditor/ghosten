import { DataBinding } from './data-binding.class';
import { cloneDeep } from '../utils';

export class Property {
  [property: string]: any;

  get(key: string) {
    return this[key];
  }

  set(key: string, value: any) {
    this[key] = value;
  }

  export(): Record<string, any> {
    return Object.entries(this).reduce<any>((acc, [key, value]) => {
      if (value instanceof DataBinding) {
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
      if (/^\[DataBinding]/.test(property[key])) {
        property[key] = new DataBinding(property[key].slice(13));
      }
    }
    Object.assign(newProperty, property);
    return newProperty;
  }

  clear() {
    for (const key in this) {
      delete this[key];
    }
  }
}
