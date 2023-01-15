import { Component, OnInit } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';
import { NavProperty } from '@ghosten/components';

@Component({
  selector: 'gt-nav',
  template: ` <ul class="nav" [ngClass]="[property.style || '', property.fill || '', property.align || '']">
    <li class="nav-item" *ngIf="!property.items.length">
      <a href="javascript:void(0);" class="nav-link">占位Tab</a>
    </li>
    <li class="nav-item" *ngFor="let item of property.items">
      <a href="javascript:void(0);" class="nav-link" [class.active]="item.active" [class.disabled]="item.disabled">
        {{ item.tab }}
      </a>
    </li>
  </ul>`,
})
export class NavComponent extends EditAbstractComponent<NavProperty> implements OnInit {}
