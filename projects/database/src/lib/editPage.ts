import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';

export function editPage(
  db: IDBDatabase,
  pageConfig: any,
): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  if (pageConfig.parentId === null) pageConfig.parentId = 'null';
  if (pageConfig.id === pageConfig.parentId)
    throw {
      type: 'error',
      name: 'parentId',
      message: '上级菜单出现循环引用，请选择其他上级菜单',
    };
  return resolveRequest<any>(
    configObjectStore
      .index('url_parentId')
      .get(IDBKeyRange.only([pageConfig.url, pageConfig.parentId])),
  ).then(request => {
    if (request.result && request.result.id !== pageConfig.id) {
      throw {
        type: 'error',
        name: 'url',
        message: '该条数据路径重复',
      };
    } else {
      return isLoopChain(
        pageConfig.id,
        pageConfig.parentId,
        configObjectStore,
      ).then(isLoop => {
        if (isLoop) {
          throw {
            type: 'error',
            name: 'parentId',
            message: '上级菜单出现循环引用，请选择其他上级菜单',
          };
        } else {
          return resolveRequest<any>(configObjectStore.get(pageConfig.id)).then(
            request => {
              if (!request.result) {
                throw {
                  type: 'error',
                  name: 'id',
                  message: `ID 为${pageConfig.id} 不存在`,
                };
              } else {
                configObjectStore.put({
                  ...pageConfig,
                  type: request.result.type,
                });
                return resolveTransaction(transaction).then(() => ({
                  type: 'log',
                  subType: 'editPage',
                  message: '修改成功',
                }));
              }
            },
          );
        }
      });
    }
  });
}

function isLoopChain(
  targetId: any,
  parentId: any,
  objectStore: IDBObjectStore,
): Promise<boolean> {
  return resolveRequest<any>(
    objectStore.index('id').get(IDBKeyRange.only(parentId)),
  ).then(request => {
    if (request.result) {
      const _parentId =
        request.result.parentId === 'null' ? 'null' : +request.result.parentId;
      if (targetId === _parentId) {
        return true;
      } else {
        return isLoopChain(targetId, _parentId, objectStore);
      }
    } else {
      return false;
    }
  });
}
