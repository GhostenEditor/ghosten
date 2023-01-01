import { Component } from '@angular/core';
import { EditAbstractComponent } from '@ghosten/editor';

@Component({
  selector: 'gt-toggle',
  template: `
    <div class="form-check form-switch">
      <input type="checkbox" class="form-check-input" role="switch" />
      <label class="form-check-label">切换按钮</label>
    </div>
  `,
})
export class ToggleComponent extends EditAbstractComponent {}
