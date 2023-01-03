import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';

export function save(
  db: IDBDatabase,
  data: { id: number; data: string },
): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  let id = data.id;
  if (id === null || id === undefined) {
    const request = configObjectStore.add({
      pageTitle: 'untitled',
      pageDescription: 'untitled',
      pageUrl: 'untitled',
    });
    resolveRequest(request)
      .then(() => (id = request.result as number))
      .then(() =>
        resolveRequest(
          configHistoryObjectStore.add({
            id,
            config: data.data,
            timestamp: Date.now(),
          }),
        ),
      );
  } else {
    resolveRequest(
      configHistoryObjectStore.add({
        id,
        config: data.data,
        timestamp: Date.now(),
      }),
    ).then();
  }
  return resolveTransaction(transaction).then(() => ({
    type: 'log',
    subType: 'save',
    message: '保存成功',
    data: { id },
  }));
}
