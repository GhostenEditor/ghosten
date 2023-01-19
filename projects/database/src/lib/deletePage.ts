import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function deletePage(db: IDBDatabase, { id }: any): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');

  configObjectStore.delete(id);
  configHistoryObjectStore
    .index('id')
    .openCursor(IDBKeyRange.only(id))
    .addEventListener('success', function () {
      const cursor = this.result;
      if (cursor) {
        cursor.delete();
        cursor.continue();
      }
    });
  return resolveTransaction(transaction).then(() => ({
    type: 'log',
    subType: 'deletePage',
    message: '删除成功',
  }));
}
