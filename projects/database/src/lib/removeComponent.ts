import { MessageEvent } from './types';
import { resolveRequest } from './resolve';

export function removeComponent(db: IDBDatabase, data: any): Promise<MessageEvent> {
  const transaction = db.transaction(['COMPONENT'], 'readwrite');
  const componentObjectStore = transaction.objectStore('COMPONENT');
  return resolveRequest(componentObjectStore.delete(IDBKeyRange.only(data.id))).then(() => ({
    type: 'log',
    subType: 'removeComponent',
    message: '删除成功',
    data: null,
  }));
}
