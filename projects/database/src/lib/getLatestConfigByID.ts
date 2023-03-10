import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';
import { decode } from './pako';

export function getLatestConfigByID(db: IDBDatabase, { id, timestamp }: any): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY', 'COMPONENT'], 'readonly');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  const componentObjectStore = transaction.objectStore('COMPONENT');
  resolveTransaction(transaction).then();

  return Promise.all([
    resolveRequest<any>(configObjectStore.get(+id)).then(request => request.result),
    resolveRequest<IDBCursorWithValue>(
      !isNaN(+timestamp)
        ? configHistoryObjectStore.index('id_timestamp').openCursor(IDBKeyRange.only([+id, +timestamp]), 'prev')
        : configHistoryObjectStore.index('id').openCursor(IDBKeyRange.only(+id), 'prev'),
    ).then<any>(request => request.result && request.result.value),
    resolveRequest<any[]>(componentObjectStore.getAll()),
  ]).then(
    async ([res1, res2, res3]) => {
      if (!res1) {
        return {
          type: 'log',
          subType: 'getLatestConfigByID',
          data: null,
        };
      }
      if (res2.settings) {
        res2.settings.name = res1.title;
        res2.settings.description = res1.description;
      }
      const data = {
        ...res1,
        ...res2,
        components: res3.result.map(item => decode(item.config)),
      };
      if (data.parentId === 'null') data.parentId = null;
      if (data.config) {
        data.config = decode(data.config);
      }
      return {
        type: 'log',
        subType: 'getLatestConfigByID',
        data,
      };
    },
    error => ({
      type: 'error',
      message: error.toString(),
    }),
  );
}
