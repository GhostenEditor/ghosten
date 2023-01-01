import { FormControl, ValidatorFn } from '@angular/forms';

export type FormItemType =
  | 'select'
  | 'toggle'
  | 'text'
  | 'textarea'
  | 'button'
  | 'object'
  | 'table'
  | 'icon'
  | 'number'
  | 'numberHasUnit'
  | 'fourNumbers'
  | 'color'
  | 'border';

export interface FormItem {
  hide?: boolean;
  disabled?: boolean;
  label?: string;
  type: FormItemType;
  name: string;
  value?: any;
  className?: string;
  options?: OptionModel[];
  columns?: any[];
  tableAddType?: 'inline' | 'button';
  text?: string;
  btnText?: string;
  relateList?: any[];
  inherit?: boolean;
  canBind?: boolean;
  canConnect?: boolean;
  validator?: ((gt?: any) => ValidatorFn | ValidatorFn[]) | null;
  updateOn?: 'change' | 'blur' | 'submit';
  onclick?(): void;

  onchange?(value: string): void;
}

export interface OptionModel extends Record<string, string> {
  label: string;
  value: string;

  // id: string;
}

export interface FormEvent {
  formItem: FormItem;
  formControl: FormControl;
}
