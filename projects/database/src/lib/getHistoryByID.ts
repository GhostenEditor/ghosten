import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';

export function getHistoryByID(db: IDBDatabase, { id }: any): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG_HISTORY'], 'readonly');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  resolveTransaction(transaction).then();

  return resolveRequest<any[]>(configHistoryObjectStore.index('id').getAll(IDBKeyRange.only(+id))).then(data => ({
    type: 'log',
    subType: 'getHistoryByID',
    message: '数据查询成功',
    data: data.result.reverse().map(({ id, type, timestamp }) => ({ id, type, timestamp })),
  }));
}
