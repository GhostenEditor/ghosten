import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuItem } from '@ghosten/database';

@Component({
  selector: 'app-navigation-item',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
  host: {
    class: 'overflow-hidden',
  },
  template: ` <ul class="list-unstyled" [class.mt-1]="level !== 1" cdkAccordion [multi]="true">
    <ng-container *ngFor="let item of items" [expanded]="true" cdkAccordionItem #accordionItem="cdkAccordionItem">
      <li class="mb-1" [class.open]="accordionItem.expanded">
        <ng-container *ngIf="item.directory">
          <div
            class="btn btn-text d-flex align-items-baseline btn-sm"
            routerLinkActive="active"
            [style.padding-left]="level * 0.75 + 'rem'"
            (click)="accordionItem.toggle()"
          >
            <a [routerLink]="item.url" class="d-none"></a>
            <i class="gt-icon me-2 flex-shrink-0">{{ item.icon }}</i>
            <span class="flex-grow-1 text-start text-truncate">{{ item.label }}</span>
            <i class="gt-icon ms-2 flex-shrink-0">{{ accordionItem.expanded ? 'chevron_down' : 'chevron_right' }}</i>
          </div>
          <app-navigation-item
            class="d-block"
            [items]="item.children!"
            [level]="level + 1"
            [@bodyExpansion]="accordionItem.expanded ? 'expanded' : 'collapsed'"
          ></app-navigation-item>
        </ng-container>
        <ng-container *ngIf="!item.directory"
          ><a
            [routerLink]="item.url"
            [style.padding-left]="level * 0.75 + 'rem'"
            routerLinkActive="active"
            class="btn btn-text d-flex align-items-baseline btn-sm"
            ><i class="gt-icon me-2 flex-shrink-0">{{ item.icon }}</i
            ><span class="text-truncate">{{ item.label }}</span></a
          >
        </ng-container>
      </li>
    </ng-container>
  </ul>`,
})
export class NavigationItemComponent {
  @Input() items: MenuItem[] | null;
  @Input() level = 1;
}
