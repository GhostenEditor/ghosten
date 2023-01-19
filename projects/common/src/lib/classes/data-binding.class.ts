import { executeCode } from '../utils';

export class DataBinding<T = any> {
  public compiled = false;
  public data: string;
  public compiledData: T;

  constructor(data: any) {
    if (typeof data === 'string') {
      this.data = data;
    } else {
      try {
        this.data = JSON.stringify(data);
      } catch (e) {
        console.error(e);
      }
    }
  }

  compile(context: any, globalVariables: Record<string, any>) {
    return executeCode(this.data, context, globalVariables);
  }
}
