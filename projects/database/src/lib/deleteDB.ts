import { MessageEvent } from './types';
import { resolveRequest } from './resolve';

export function deleteDB(DBName: string): Promise<MessageEvent> {
  const request = indexedDB.deleteDatabase(DBName);

  return resolveRequest(request).then(
    () => ({
      type: 'error',
      subType: 'deleteDB',
      message: '数据库删除失败',
    }),
    () => ({
      type: 'error',
      subType: 'deleteDB',
      message: '数据库删除失败',
    }),
  );
}
