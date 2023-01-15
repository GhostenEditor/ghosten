import { Component, OnDestroy, OnInit } from '@angular/core';
import { RenderAbstractComponent } from '@ghosten/renderer';
import { WaterProperty } from '@ghosten/components';

@Component({
  selector: 'gt-water',
  template: `
    <div class="h-100 d-flex flex-column">
      <div class="position-relative flex-grow-1">
        <canvas
          class="d-block mx-auto"
          gt-waterBall
          [value]="property.data | dataBinding"
          [max]="property.gaugeMax"
          [min]="property.gaugeMin"
          [minColor]="property.minColor"
          [maxColor]="property.maxColor"
          [background]="property.background"
        ></canvas>
        <span class="position-absolute top-50 start-50 translate-middle text-white">{{
          gtNode.property.data | dataBinding | number : '1.0-1'
        }}</span>
      </div>
      <div class="text-truncate text-center p-2">{{ property.title }}</div>
    </div>
  `,
})
export class WaterComponent extends RenderAbstractComponent<WaterProperty> implements OnInit, OnDestroy {}
