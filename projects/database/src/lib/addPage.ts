import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';

export function addPage(db: IDBDatabase, pageConfig: any): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  if (pageConfig.parentId === null) pageConfig.parentId = 'null';

  return resolveRequest(
    configObjectStore.index('url_parentId').get(IDBKeyRange.only([pageConfig.url, pageConfig.parentId])),
  ).then(request => {
    if (request.result) {
      throw {
        type: 'error',
        name: 'url',
        message: '该条数据路径重复',
      };
    } else {
      const request = configObjectStore.add(pageConfig);
      return resolveTransaction(transaction).then(() => ({
        type: 'log',
        subType: 'addPage',
        message: '创建成功',
        data: {
          ...pageConfig,
          id: request.result,
        },
      }));
    }
  });
}
