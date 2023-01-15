export type ToastPositions =
  | 'top_left'
  | 'top_center'
  | 'top_right'
  | 'middle_left'
  | 'middle_center'
  | 'middle_right'
  | 'bottom_left'
  | 'bottom_center'
  | 'bottom_right';

export interface IToast {
  type: 'info' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'secondary';
  title?: string;
  message?: string;
  detail?: string;
  time?: number;
  position?: ToastPositions;
  duration?: number | boolean;
  buttons?: string[];
  buttonClick?: (button: string) => void;
}
