import { MessageEvent } from './types';
import { resolveRequest } from './resolve';

export function getRoutes(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction('CONFIG', 'readonly');
  const objectStore = transaction.objectStore('CONFIG');
  const request = objectStore.getAll();
  return resolveRequest(request).then(() => ({
    type: 'log',
    subType: 'getRoutes',
    message: '数据查询成功',
    data: request.result,
  }));
}
