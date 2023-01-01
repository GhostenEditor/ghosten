import { resolveTransaction } from './resolve';

export function deletePage(db: IDBDatabase, { id }: any) {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  resolveTransaction(transaction).then(() => {
    postMessage({
      type: 'log',
      subType: 'deletePage',
      message: '删除成功',
    });
  });
  configObjectStore.delete(id);
  configHistoryObjectStore
    .index('id')
    .openCursor(IDBKeyRange.only(id))
    .addEventListener('success', function (event) {
      const cursor = this.result;
      if (cursor) {
        cursor.delete();
        cursor.continue();
      }
    });
}
