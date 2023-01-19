import pako from 'pako';

import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function importDB(db: IDBDatabase, data: File): Promise<MessageEvent> {
  return data
    .arrayBuffer()
    .then(data => pako.inflate(data, { to: 'string' }))
    .then(data => JSON.parse(data))
    .then(({ config, history, component, componentHistory }) => {
      const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY', 'COMPONENT', 'COMPONENT_HISTORY'], 'readwrite');
      const configObjectStore = transaction.objectStore('CONFIG');
      const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
      const componentOjectStore = transaction.objectStore('COMPONENT');
      const componentHistoryOjectStore = transaction.objectStore('COMPONENT_HISTORY');
      configObjectStore.openCursor().addEventListener('success', function () {
        const cursor = this.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          config.forEach((item: any) => configObjectStore.add(item));
        }
      });
      configHistoryObjectStore.openCursor().addEventListener('success', function () {
        const cursor = this.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          history.forEach((item: any) => configHistoryObjectStore.add(item));
        }
      });
      componentOjectStore.openCursor().addEventListener('success', function () {
        const cursor = this.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          component.forEach((item: any) => componentOjectStore.add(item));
        }
      });
      componentHistoryOjectStore.openCursor().addEventListener('success', function () {
        const cursor = this.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          componentHistory.forEach((item: any) => componentHistoryOjectStore.add(item));
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
