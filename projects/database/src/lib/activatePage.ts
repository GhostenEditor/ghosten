import { resolveTransaction } from './resolve';

export function activatePage(db: IDBDatabase, id: number) {
  const transaction = db.transaction(['CONFIG', 'EDIT_CONFIG'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  const editConfigObjectStore = transaction.objectStore('EDIT_CONFIG');
  const request = configObjectStore.get(id);
  request.addEventListener('success', () => {
    if (request.result) {
      editConfigObjectStore.put({ type: 'activated ID', value: id });
    } else {
      throw new Error('更新失败');
    }
  });
  resolveTransaction(transaction).then(() => {
    postMessage({
      type: 'log',
      subType: 'activatePage',
      message: '更新成功',
    });
  });
}
