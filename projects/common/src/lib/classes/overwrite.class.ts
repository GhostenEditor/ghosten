import { Property } from './property.class';
import { Style } from './style.class';

export class Overwrite {
  [property: string]: any;

  set(key: string, value: { property: Property; style: Style }) {
    this[key] = value;
  }

  export() {
    const acc: any = {};
    for (const key in this) {
      acc[key] = {
        property: this[key].property.export(),
        style: this[key].style.export(),
      };
    }
    return acc;
  }
}
