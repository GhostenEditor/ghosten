import pako from 'pako';

import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';

export function exportDBWithoutHistory(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY', 'COMPONENT', 'COMPONENT_HISTORY'], 'readonly');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  const request1 = transaction.objectStore('CONFIG').getAll();
  const request3 = transaction.objectStore('COMPONENT').getAll();
  // const request4 = transaction.objectStore('COMPONENT_HISTORY').getAll();
  const history: any[] = [];
  resolveRequest<any[]>(request1)
    .then(({ result }) =>
      Promise.all(
        result.map(item =>
          resolveRequest<IDBCursorWithValue | null>(
            configHistoryObjectStore.index('id').openCursor(IDBKeyRange.only(item.id), 'prev'),
          ).then(({ result }) => result && result.value),
        ),
      ),
    )
    .then(data => history.push(...data.filter(v => !!v)));
  return resolveTransaction(transaction).then(async () => {
    const data1 = pako.deflate(
      JSON.stringify({
        config: request1.result,
        history,
        component: request3.result,
        componentHistory: [],
      }),
      { level: 9 },
    );
    return {
      type: 'log',
      subType: 'exportDBWithoutHistory',
      message: '数据查询成功',
      data: new File([data1], 'export.gt', {
        type: 'application/ghosten',
      }),
    };
  });
}
