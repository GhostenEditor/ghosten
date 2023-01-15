import { MessageEvent } from './types';
import { resolveRequest } from './resolve';

import pako from 'pako';

export function saveComponent(db: IDBDatabase, data: any): Promise<MessageEvent> {
  const transaction = db.transaction(['COMPONENT', 'COMPONENT_HISTORY'], 'readwrite');
  const componentObjectStore = transaction.objectStore('COMPONENT');
  const componentHistoryObjectStore = transaction.objectStore('COMPONENT_HISTORY');
  const config = pako
    .deflate(data.config, { level: 9 })
    .toString()
    .split(',')
    .map(v => (+v).toString(16).padStart(2, '0'))
    .join('');
  return Promise.all([
    resolveRequest(componentObjectStore.put({ id: data.id, config })),
    resolveRequest(
      componentHistoryObjectStore.add({
        id: data.id,
        config,
        timestamp: Date.now(),
      }),
    ),
  ]).then(() => ({
    type: 'log',
    subType: 'saveComponent',
    message: '保存成功',
    data: null,
  }));
}
