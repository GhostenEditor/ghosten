import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'settings',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Settings"
    modalTitle="设置"
    (confirm)="confirm.emit()"
    (cancel)="cancel.emit()"
  >
    <form class="row g-3" [formGroup]="formGroup">
      <div class="col-md-6">
        <label class="form-label">字体大小</label>
        <input type="range" class="form-range" min="12" max="20" step="1" formControlName="fontSize" />
      </div>
      <div></div>
      <div class="col-md-6">
        <label class="form-label">自动保存</label>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" />
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label">自动保存频率</label>
        <div class="input-group">
          <input type="numer" class="form-control" formControlName="autoSaveFrequency" />
          <span class="input-group-text">ms</span>
        </div>
      </div>
      <div class="col">
        <label class="form-label">主题</label>
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              id="gt-settings-theme-light"
              type="radio"
              value="light"
              formControlName="theme"
            />
            <label class="form-check-label" for="gt-settings-theme-light">Light</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              id="gt-settings-theme-dark"
              type="radio"
              value="dark"
              formControlName="theme"
            />
            <label class="form-check-label" for="gt-settings-theme-dark">Dark</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              id="gt-settings-theme-auto"
              type="radio"
              value="auto"
              formControlName="theme"
            />
            <label class="form-check-label" for="gt-settings-theme-auto">Auto</label>
          </div>
        </div>
      </div>
    </form>
  </gt-modal>`,
})
export class SettingsComponent implements OnInit {
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  formGroup = new FormGroup<any>({
    fontSize: new FormControl(16),
    autoSaveFrequency: new FormControl(3000),
    theme: new FormControl('auto'),
  });

  constructor() {}

  ngOnInit() {
    this.formGroup.get('fontSize')!.valueChanges.subscribe(value => {
      document.documentElement.style.setProperty('font-size', value + 'px');
    });
  }
}
