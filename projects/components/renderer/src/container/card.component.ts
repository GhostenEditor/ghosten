import { Component } from '@angular/core';

import { CardProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  selector: 'gt-card',
  template: ` <div class="card" [ngClass]="[property.style || '', property.align || '']">
    <img *ngIf="property.topImage" [src]="property.topImage" class="card-img-top" alt="" />
    <div class="card-header" *ngIf="property.showHeader">
      {{ property.title }}
      <ng-template gtTemplate templateID="header"></ng-template>
    </div>
    <div class="card-body" *ngIf="property.showBody">
      <ng-template gtTemplate templateID="body"></ng-template>
    </div>
    <ul class="list-group list-group-flush" *ngIf="property.showListGroup">
      <ng-template gtTemplate templateID="listGroup"></ng-template>
    </ul>
    <div class="card-footer" *ngIf="property.showFooter">
      <ng-template gtTemplate templateID="footer"></ng-template>
    </div>
    <img *ngIf="property.bottomImage" [src]="property.bottomImage" class="card-img-bottom" alt="" />
  </div>`,
})
export class CardComponent extends RenderAbstractComponent<CardProperty> {}
