import { Pipe, PipeTransform } from '@angular/core';
import { DataBinding } from '@ghosten/common';

@Pipe({
  name: 'dataBinding',
  pure: false,
})
export class DataBindingPipe implements PipeTransform {
  transform(value: DataBinding | any, ...args: any[]): any {
    if (value instanceof DataBinding) {
      return '~~数据绑定~~';
    } else if (typeof value === 'string') {
      return /\${.+?}/.test(value) ? '~~数据绑定~~' : value;
    } else {
      return value;
    }
  }
}
