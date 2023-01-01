import { resolveRequest } from './resolve';

export function save(db: IDBDatabase, data: { id: number; data: string }) {
  const transaction = db.transaction(['CONFIG_HISTORY'], 'readwrite');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  transaction.addEventListener(
    'complete',
    () =>
      postMessage({
        type: 'log',
        message: '保存成功',
      }),
    { once: true },
  );
  transaction.addEventListener(
    'error',
    error => {
      postMessage({
        type: 'error',
        // @ts-ignore
        message: error,
      });
    },
    { once: true },
  );
  resolveRequest(
    configHistoryObjectStore.add({
      id: data.id,
      config: data.data,
      timestamp: Date.now(),
    }),
  ).then();
}
