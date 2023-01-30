import { Component, Input } from '@angular/core';
import { GtNode } from '@ghosten/common';

@Component({
  selector: 'gt-panel-class',
  template: `<select class="form-select" multiple [(ngModel)]="value" (ngModelChange)="change()">
    <option [ngValue]="null">---------------------------------------------------------</option>
    <optgroup *ngFor="let classGroup of classList" [label]="classGroup.category">
      <option *ngFor="let className of classGroup.list" [ngValue]="className">{{ className }}</option>
    </optgroup>
  </select>`,
})
export class ClassComponent {
  public _gtNode: GtNode;
  public value: string[];
  public classList: { category: string; list: string[] }[] = [
    {
      category: 'Margin',
      list: ['m-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'mx-auto'],
    },
    {
      category: 'Padding',
      list: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5'],
    },
    {
      category: 'Float',
      list: ['clearfix', 'float-start', 'float-end'],
    },
    {
      category: 'Border',
      list: ['border'],
    },
    {
      category: 'Display',
      list: ['d-block'],
    },
  ];

  @Input() set gtNode(gtNode: GtNode) {
    this._gtNode = gtNode;
    this.value = gtNode.classList;
  }

  get gtNode() {
    return this._gtNode;
  }

  change() {
    this.gtNode.classList = this.value.filter(v => !!v);
  }
}
