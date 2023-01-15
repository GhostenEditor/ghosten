import { MessageEvent } from './types';
import { resolveRequest } from './resolve';

export function deleteDB(db: IDBDatabase, DBName: string): Promise<MessageEvent> {
  db.close();
  const request = indexedDB.deleteDatabase(DBName);

  return resolveRequest(request).then(
    () => ({
      type: 'log',
      subType: 'deleteDB',
      message: '数据库删除成功',
    }),
    reason => {
      throw new Error(reason);
    },
  );
}
