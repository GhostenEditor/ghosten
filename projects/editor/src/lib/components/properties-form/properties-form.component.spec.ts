import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertiesFormComponent } from './properties-form.component';
import { PropertiesFormModule } from './properties-form.module';

describe('Form List', () => {
  let fixture: ComponentFixture<PropertiesFormComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, PropertiesFormModule],
    });
    fixture = TestBed.createComponent(PropertiesFormComponent);
    fixture.debugElement.nativeElement.style.padding = '5rem';
  });
  it('Form List', () => {
    fixture.componentRef.instance.formList = [
      {
        label: '文字',
        name: 'text',
        type: 'text',
        value: 'Button',
        canBind: true,
        inherit: true,
      },
      {
        label: '尺寸',
        name: 'buttonSize',
        type: 'select',
        options: [
          { label: 'lg', value: 'btn-lg' },
          { label: 'md', value: '' },
          { label: 'sm', value: 'btn-sm' },
        ],
      },
      {
        label: '颜色',
        name: 'buttonColor',
        type: 'select',
        value: 'btn-primary',
        options: [
          { label: 'primary', value: 'btn-primary' },
          { label: 'default', value: 'btn-default' },
          { label: 'secondary', value: 'btn-light' },
          { label: 'warning', value: 'btn-warning' },
          { label: 'danger', value: 'btn-danger' },
          { label: 'info', value: 'btn-info' },
        ],
      },
      {
        label: '类型',
        name: 'buttonType',
        type: 'select',
        options: [
          { label: 'rect', value: '' },
          { label: 'block', value: 'btn-block' },
        ],
      },
    ];
    fixture.detectChanges();
    expect(fixture).toBeDefined();
  });
});
