import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';

export function getLatestConfigByID(
  db: IDBDatabase,
  { id }: any,
): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readonly');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  resolveTransaction(transaction).then();
  const request = configHistoryObjectStore
    .index('id')
    .openCursor(IDBKeyRange.only(+id), 'prev');
  return resolveRequest(request)
    .then(() => {
      const cursor = request.result;
      const _req = configObjectStore.get(+id);
      return resolveRequest(_req).then(() => ({
        cursor,
        _cursor: _req.result,
      }));
    })
    .then(
      ({ cursor, _cursor }) => ({
        type: 'log',
        subType: 'getLatestConfigByID',
        data: cursor ? { ...cursor.value, ..._cursor } : null,
      }),
      error => ({
        type: 'error',
        message: error.toString(),
      }),
    );
}
