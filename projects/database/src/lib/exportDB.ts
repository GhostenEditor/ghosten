import pako from 'pako';

import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function exportDB(db: IDBDatabase): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readonly');
  const request1 = transaction.objectStore('CONFIG').getAll();
  const request2 = transaction.objectStore('CONFIG_HISTORY').getAll();
  return resolveTransaction(transaction).then(async () => {
    // for (const item of request2.result) {
    //   if (/,/.test(item.config)) {
    //     item.config = (item.config as string)
    //       .split(',')
    //       .map(v => (+v).toString(16).padStart(2, '0'))
    //       .join('');
    //   }
    // }
    const data1 = pako.deflate(
      JSON.stringify({
        config: request1.result,
        history: request2.result,
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
