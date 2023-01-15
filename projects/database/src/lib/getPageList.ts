import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function getPageList(db: IDBDatabase, data: any): Promise<MessageEvent> {
  const transaction = db.transaction('CONFIG', 'readonly');
  const objectStore = transaction.objectStore('CONFIG');
  if (data && data.type) {
    const request = objectStore.index('type').getAll(IDBKeyRange.only(data.type));
    return resolveTransaction(transaction).then(() => ({
      type: 'log',
      subType: 'getPageList',
      message: '数据查询成功',
      data: request.result.map(item => {
        if (item.parentId === 'null') {
          item.parentId = null;
        }
        return item;
      }),
    }));
  } else {
    const request = objectStore.getAll();
    return resolveTransaction(transaction).then(() => ({
      type: 'log',
      subType: 'getPageList',
      message: '数据查询成功',
      data: request.result.map(item => {
        if (item.parentId === 'null') {
          item.parentId = null;
        }
        return item;
      }),
    }));
  }
}
