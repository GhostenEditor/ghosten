export interface LogEvent {
  type: string;
  subType?: string;
  message: string | null;
  data: any;

  callback?(...rest: any[]): void;
}
