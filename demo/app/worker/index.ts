import { EMPTY, Observable, filter, fromEvent, take } from 'rxjs';
import { map } from 'rxjs/operators';

interface WorkerMessage {
  type: string;
  data?: any;
}

type RequestType =
  | 'addPage'
  | 'editPage'
  | 'deletePage'
  | 'activatePage'
  | 'getActivatedPageID'
  | 'getPageList'
  | 'getNavigations'
  | 'getRoutes'
  | 'getLatestConfigByID'
  | 'save'
  | 'deleteDB'
  | 'importDB'
  | 'exportDB';

export class WorkerConnector {
  static workerConnector: WorkerConnector | null = null;
  private readonly worker: Worker | null = null;
  public message: Observable<
    MessageEvent<{ type: string; subType: string; data: any; message?: string }>
  > = EMPTY;
  public error: Observable<any> = EMPTY;

  constructor() {
    if (WorkerConnector.workerConnector) {
      return WorkerConnector.workerConnector;
    } else {
      if (typeof Worker !== 'undefined') {
        this.worker = new Worker(new URL('./app.worker', import.meta.url));
        this.message = fromEvent<MessageEvent>(this.worker, 'message');
        this.error = fromEvent<MessageEvent>(this.worker, 'messageerror');
      } else {
        throw new Error('Web Worker is not supported by you browser!');
      }
    }
  }

  postMessage(
    message: WorkerMessage,
    options?: Transferable[] | StructuredSerializeOptions,
  ) {
    if (this.worker) {
      this.worker.postMessage(message, options as any);
    }
  }

  request(type: RequestType, data: any) {
    this.postMessage({ type, data });
    return this.message.pipe(
      filter(({ data }) => data.subType === type),
      map(({ data }) => data.data),
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
