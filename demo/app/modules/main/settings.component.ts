import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'settings',
  template: ` <gt-modal
    i18n-modalTitle="Modal Title: Settings"
    modalTitle="设置"
    (confirm)="modalConfirm.emit()"
    (cancel)="modalCancel.emit()"
    (animationDone)="animationDone.emit()"
  >
    <form class="row g-3" [formGroup]="formGroup">
      <div class="col-md-6">
        <label class="form-label" i18n="Settings: Font Size">字体大小</label>
        <input type="range" class="form-range" min="12" max="20" step="1" formControlName="fontSize" />
      </div>
      <div class="col-md-6">
        <label class="form-label" i18n="Settings: Direction">方向</label>
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              id="gt-settings-direction-ltr"
              type="radio"
              value="ltr"
              formControlName="direction"
            />
            <label class="form-check-label" for="gt-settings-direction-ltr">ltr</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              id="gt-settings-direction-rtl"
              type="radio"
              value="rtl"
              formControlName="direction"
            />
            <label class="form-check-label" for="gt-settings-direction-rtl">rtl</label>
          </div>
        </div>
      </div>
      <div class="col">
        <label class="form-label" i18n="Settings: Theme">主题</label>
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
  @Output() modalConfirm: EventEmitter<any> = new EventEmitter();
  @Output() modalCancel: EventEmitter<any> = new EventEmitter();
  @Output() animationDone: EventEmitter<any> = new EventEmitter();

  formGroup: FormGroup;

  constructor() {
    const fontSize = localStorage.getItem('fontSize');
    const theme = localStorage.getItem('theme');
    const direction = localStorage.getItem('direction');
    this.formGroup = new FormGroup<any>({
      fontSize: new FormControl(fontSize && !isNaN(+fontSize) ? +fontSize : 16),
      direction: new FormControl(direction || 'ltr'),
      theme: new FormControl(theme || 'auto'),
    });
  }

  ngOnInit() {
    this.formGroup.get('fontSize')!.valueChanges.subscribe(value => {
      document.documentElement.style.setProperty('font-size', value + 'px');
      localStorage.setItem('fontSize', value);
    });
    this.formGroup.get('theme')!.valueChanges.subscribe(value => {
      if (value === 'auto') {
        const darkMode = matchMedia('(prefers-color-scheme: dark)');
        document.documentElement.dataset.bsTheme = darkMode.matches ? 'dark' : 'light';
      } else {
        document.documentElement.dataset.bsTheme = value;
      }
      localStorage.setItem('theme', value);
    });
    this.formGroup.get('direction')!.valueChanges.subscribe(value => {
      const linkElement = document.head.querySelector<HTMLLinkElement>('link#bootstrap')!;
      if (value === 'rtl') {
        document.documentElement.dir = 'rtl';
        linkElement.href = linkElement.href.replace('bootstrap.min.css', 'bootstrap.rtl.min.css');
      } else {
        document.documentElement.dir = 'ltr';
        linkElement.href = linkElement.href.replace('bootstrap.rtl.min.css', 'bootstrap.min.css');
      }
      localStorage.setItem('direction', value);
    });
  }
}
