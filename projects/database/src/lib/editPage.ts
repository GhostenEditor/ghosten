import { resolveTransaction } from './resolve';

export function editPage(db: IDBDatabase, pageConfig: any) {
  const transaction = db.transaction(['CONFIG'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  resolveTransaction(transaction).then(() => {
    postMessage({
      type: 'log',
      subType: 'editPage',
      message: '修改成功',
    });
  });
  configObjectStore.put(pageConfig);
}
