import { Component } from '@angular/core';

import { CardProperty } from '@ghosten/components';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'gt-card',
  template: ` <div class="card" [ngClass]="[property.style || '', property.align || '']">
    <img *ngIf="property.topImage" [src]="property.topImage" class="card-img-top" alt="" />
    <div class="card-header" [attr.data-droppable]="'header'" *ngIf="property.showHeader">
      {{ property.title }}
      <ng-template gtTemplate templateID="header"></ng-template>
    </div>
    <div class="card-body" [attr.data-droppable]="'body'" *ngIf="property.showBody">
      <ng-template gtTemplate templateID="body"></ng-template>
    </div>
    <ul
      class="list-group list-group-flush"
      [attr.data-droppable]="'listGroup'"
      [attr.data-accept]="'listGroupItem'"
      *ngIf="property.showListGroup"
      style="min-height: 2rem"
    >
      <ng-template gtTemplate templateID="listGroup"></ng-template>
    </ul>
    <div class="card-footer" [attr.data-droppable]="'footer'" *ngIf="property.showFooter">
      <ng-template gtTemplate templateID="footer"></ng-template>
    </div>
    <img *ngIf="property.bottomImage" [src]="property.bottomImage" class="card-img-bottom" alt="" />
  </div>`,
})
export class CardComponent extends EditAbstractComponent<CardProperty> {}
