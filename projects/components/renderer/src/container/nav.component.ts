import { Component, OnInit } from '@angular/core';
import { NavProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-nav',
  template: ` <ul class="nav" [ngClass]="[property.style || '', property.fill || '', property.align || '']">
    <li class="nav-item" *ngFor="let item of property.items">
      <a
        href="javascript:void(0);"
        type="button"
        class="nav-link"
        [class.active]="item.active"
        [class.disabled]="item.disabled"
        (click)="switchNav(item); onEvent('switchTab', $event)"
      >
        {{ item.tab }}
      </a>
    </li>
  </ul>`,
})
export class NavComponent extends RenderAbstractComponent<NavProperty> implements OnInit {
  activeTab: NavProperty['items'][0];

  override afterConstructor() {
    if (this.property.items.length) {
      this.property.items.forEach(item => {
        if (this.activeTab) {
          item.active = false;
          return;
        }
        if (item.active) {
          this.activeTab = item;
        }
      });
      if (!this.activeTab) {
        this.property.items[0].active = true;
        this.activeTab = this.property.items[0];
      }
    }
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  switchNav(nav: NavProperty['items'][0]) {
    if (!nav.active) {
      this.property.items.forEach(item => (item.active = false));
      nav.active = true;
      this.activeTab = nav;
    }
  }
}
