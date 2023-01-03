import { MessageEvent } from './types';
import { resolveRequest } from './resolve';

export function getPageList(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction('CONFIG', 'readonly');
  const objectStore = transaction.objectStore('CONFIG');
  const request = objectStore.getAll();
  return resolveRequest(request).then(() => ({
    type: 'log',
    subType: 'getPageList',
    message: '数据查询成功',
    data: request.result,
  }));
}
