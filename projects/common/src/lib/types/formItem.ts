export declare interface ValidatorFn {
  (control: any): Record<string, any> | null;
}

export interface OptionModel extends Record<string, string> {
  label: string;
  value: string;
}

export interface FormItemModel {
  type:
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
  name: string;
  label?: string;
  disabled?: boolean;
  value?: any;
  className?: string;
  hide?: boolean;
  options?: OptionModel[];
  columns?: any[];
  tableAddType?: 'inline' | 'button';
  text?: string;
  btnText?: string;
  inherit?: boolean;
  canBind?: boolean;
  validators?: ValidatorFn | ValidatorFn[] | null;

  onclick?(): void;

  onchange?(value: string): void;
}
