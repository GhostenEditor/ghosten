import { EMPTY, Observable, filter, fromEvent, merge, take } from 'rxjs';
import { map } from 'rxjs/operators';

export class WorkerConnector {
  static workerConnector: WorkerConnector | null = null;
  private readonly worker: Worker | null = null;
  public message: Observable<MessageEvent<{ type: string; subType: string; data: any; message?: string }>> = EMPTY;
  public error: Observable<any> = EMPTY;

  constructor() {
    if (WorkerConnector.workerConnector) {
      return WorkerConnector.workerConnector;
    } else {
      if (typeof Worker !== 'undefined') {
        this.worker = new Worker(new URL('./app.worker', import.meta.url));
        this.message = fromEvent<MessageEvent>(this.worker, 'message');
        this.error = merge(
          fromEvent<MessageEvent>(this.worker, 'messageerror'),
          fromEvent<MessageEvent>(this.worker, 'error'),
        );
      } else {
        throw new Error('Web Worker is not supported by you browser!');
      }
    }
  }

  postMessage(message: { type: string; data?: any }, options?: Transferable[] | StructuredSerializeOptions) {
    if (this.worker) {
      this.worker.postMessage(message, options as any);
    }
  }

  request(type: string, data: any): Observable<any> {
    this.postMessage({ type, data });
    return this.message.pipe(
      filter(({ data }) => data.subType === type),
      map(event => {
        if (event.data.type === 'log') {
          return event.data;
        } else {
          throw new Error(event.data.message);
        }
      }),
      take(1),
    );
  }

  terminate() {
    if (this.worker) {
      this.worker.terminate();
    }
    WorkerConnector.workerConnector = null;
  }
}
