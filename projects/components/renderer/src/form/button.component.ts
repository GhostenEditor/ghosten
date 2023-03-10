import { Component, HostBinding, HostListener } from '@angular/core';
import { ButtonProperty } from '@ghosten/components';
import { RenderAbstractComponent } from '@ghosten/renderer';

@Component({
  preserveWhitespaces: false,
  selector: 'button[gt-button]',
  exportAs: 'gt-button',
  template: '{{gtNode.property.text | dataBinding}}',
})
export class ButtonComponent extends RenderAbstractComponent<ButtonProperty> {
  @HostListener('click', ['$event']) buttonClick(event: Event) {
    this.onEvent('click', event);
  }

  @HostBinding('class') get className() {
    return [
      'btn',
      this.gtNode.property.buttonSize,
      this.gtNode.property.buttonColor,
      this.gtNode.property.buttonType,
    ].join(' ');
  }

  @HostBinding('class.active') get buttonActive() {
    return this.resolveDataBinding(this.property.active);
  }

  @HostBinding('disabled') get disabled() {
    return this.resolveDataBinding(this.property.disabled);
  }

  @HostBinding('type') get type() {
    return 'button';
  }

  @HostListener('click') onclick() {
    this.onEvent('click');
  }
}
