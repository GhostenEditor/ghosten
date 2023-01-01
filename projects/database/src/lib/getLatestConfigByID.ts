import { resolveTransaction } from './resolve';

export function getLatestConfigByID(db: IDBDatabase, { id }: any) {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readonly');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  resolveTransaction(transaction).then();
  const request = configHistoryObjectStore
    .index('id')
    .openCursor(IDBKeyRange.only(+id), 'prev');
  request.addEventListener('success', function () {
    const cursor = this.result;
    const _req = configObjectStore.get(+id);
    _req.addEventListener('success', function () {
      const _cursor = this.result;
      postMessage({
        type: 'log',
        subType: 'getLatestConfigByID',
        data: cursor ? { ...cursor.value, ..._cursor } : null,
      });
    });
  });
  request.addEventListener(
    'error',
    error => {
      postMessage({
        type: 'error',
        // @ts-ignore
        message: error.toString(),
      });
    },
    { once: true },
  );
}
