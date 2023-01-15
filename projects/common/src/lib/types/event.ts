export interface LogEvent {
  type: 'info' | 'warning' | 'error';
  message: string | null;
  data?: any;
}
