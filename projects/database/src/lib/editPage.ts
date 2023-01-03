import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function editPage(
  db: IDBDatabase,
  pageConfig: any,
): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  configObjectStore.put(pageConfig);

  return resolveTransaction(transaction).then(() => ({
    type: 'log',
    subType: 'editPage',
    message: '修改成功',
  }));
}
