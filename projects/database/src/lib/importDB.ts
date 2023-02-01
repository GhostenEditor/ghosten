import pako from 'pako';

import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

function convertFileToConfig<T>(data: File): Promise<T> {
  return data
    .arrayBuffer()
    .then(data => pako.inflate(data, { to: 'string' }))
    .then(data => JSON.parse(data));
}

function importDataList<T = any>(objectStore: IDBObjectStore, data: T[]) {
  objectStore.openCursor().addEventListener('success', function () {
    const cursor = this.result;
    if (cursor) {
      cursor.delete();
      cursor.continue();
    } else {
      data.forEach(item => objectStore.add(item));
    }
  });
}

export function importDB(db: IDBDatabase, data: File): Promise<MessageEvent> {
  return convertFileToConfig<{ config: any[]; history: any[]; component: any[]; componentHistory: any[] }>(data).then(
    ({ config, history, component, componentHistory }) => {
      const transaction: IDBTransaction = db.transaction(
        ['CONFIG', 'CONFIG_HISTORY', 'COMPONENT', 'COMPONENT_HISTORY'],
        'readwrite',
      );
      const configObjectStore = transaction.objectStore('CONFIG');
      const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
      const componentObjectStore = transaction.objectStore('COMPONENT');
      const componentHistoryObjectStore = transaction.objectStore('COMPONENT_HISTORY');
      importDataList(configObjectStore, config);
      importDataList(configHistoryObjectStore, history);
      importDataList(componentObjectStore, component);
      importDataList(componentHistoryObjectStore, componentHistory);
      return resolveTransaction(transaction).then(() => ({
        type: 'log',
        subType: 'importDB',
        message: '导入成功',
        data: null,
      }));
    },
  );
}
