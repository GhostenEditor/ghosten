import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuItem } from './types';

@Component({
  selector: 'app-navigation-item',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)'),
      ),
    ]),
  ],
  host: {
    class: 'overflow-hidden',
  },
  template: ` <ul class="list-unstyled mt-2" cdkAccordion>
    <li
      class="mb-1"
      *ngFor="let item of items"
      cdkAccordionItem
      #accordionItem="cdkAccordionItem"
      [class.open]="accordionItem.expanded"
    >
      <ng-container *ngIf="item.children?.length">
        <div
          class="btn btn-text d-flex"
          routerLinkActive="active"
          [style.padding-left]="level * 0.75 + 'rem'"
          [attr.aria-expanded]="accordionItem.expanded"
          (click)="accordionItem.toggle()"
        >
          <a [routerLink]="item.url" class="d-none"></a>
          <i class="gt-icon me-2" *ngIf="level === 1">toys</i
          ><span class="flex-grow-1 text-start">{{ item.label }}</span
          ><i class="gt-icon ms-2" *ngIf="item.children?.length"
            >chevron_right</i
          >
        </div>
        <app-navigation-item
          [items]="item.children"
          [level]="level + 1"
          class="d-block"
          [@bodyExpansion]="accordionItem.expanded ? 'expanded' : 'collapsed'"
        ></app-navigation-item>
      </ng-container>
      <ng-container *ngIf="!item.children?.length"
        ><a
          [routerLink]="item.url"
          [style.padding-left]="level * 0.75 + 'rem'"
          routerLinkActive="active"
          class="btn btn-text d-flex"
          ><i class="gt-icon me-2" *ngIf="level === 1">toys</i
          >{{ item.label }}</a
        >
      </ng-container>
    </li>
  </ul>`,
})
export class NavigationItemComponent {
  @Input() items?: MenuItem[];
  @Input() level = 1;
}
