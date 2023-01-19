import pako from 'pako';

import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function exportDB(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY', 'COMPONENT', 'COMPONENT_HISTORY'], 'readonly');
  const request1 = transaction.objectStore('CONFIG').getAll();
  const request2 = transaction.objectStore('CONFIG_HISTORY').getAll();
  const request3 = transaction.objectStore('COMPONENT').getAll();
  const request4 = transaction.objectStore('COMPONENT_HISTORY').getAll();
  return resolveTransaction(transaction).then(async () => {
    const data1 = pako.deflate(
      JSON.stringify({
        config: request1.result,
        history: request2.result,
        component: request3.result,
        componentHistory: request4.result,
      }),
      { level: 9 },
    );
    return {
      type: 'log',
      subType: 'exportDB',
      message: '数据查询成功',
      data: new File([data1], 'export.gt', {
        type: 'application/ghosten',
      }),
    };
  });
}
