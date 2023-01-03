import pako from 'pako';

import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function importDB(db: IDBDatabase, data: File): Promise<MessageEvent> {
  return data.arrayBuffer().then(res => {
    const transaction = db.transaction(
      ['CONFIG', 'CONFIG_HISTORY'],
      'readwrite',
    );
    const configObjectStore = transaction.objectStore('CONFIG');
    const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
    const { config, history } = JSON.parse(pako.inflate(res, { to: 'string' }));
    configObjectStore.openCursor().addEventListener('success', function () {
      const cursor = this.result;
      if (cursor) {
        cursor.delete();
        cursor.continue();
      } else {
        config.forEach((item: any) => configObjectStore.add(item));
      }
    });
    configHistoryObjectStore
      .openCursor()
      .addEventListener('success', function () {
        const cursor = this.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          history.forEach((item: any) => configHistoryObjectStore.add(item));
        }
      });
    return resolveTransaction(transaction).then(() => ({
      type: 'log',
      subType: 'importDB',
      message: '导入成功',
      data: null,
    }));
  });
}
