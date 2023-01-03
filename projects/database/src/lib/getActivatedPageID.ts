import { MessageEvent } from './types';
import { resolveRequest } from './resolve';

export function getActivatedPageID(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction('EDIT_CONFIG', 'readonly');
  const objectStore = transaction.objectStore('EDIT_CONFIG');
  const request = objectStore.get('activated ID');
  return resolveRequest(request).then(() => ({
    type: 'log',
    subType: 'getActivatedPageID',
    message: '数据查询成功',
    data: request.result,
  }));
}
