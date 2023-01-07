import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';
import pako from 'pako';

export function save(
  db: IDBDatabase,
  {
    id,
    config,
    settings,
    type,
  }: { id: number; config: string; settings: any; type: string },
): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  id = +id;
  return resolveRequest(configObjectStore.get(id)).then(request => {
    if (request.result) {
      configHistoryObjectStore.add({
        id,
        type,
        settings,
        config: pako
          .deflate(config, { level: 9 })
          .toString()
          .split(',')
          .map(v => (+v).toString(16).padStart(2, '0'))
          .join(''),
        timestamp: Date.now(),
      });
      return resolveTransaction(transaction).then(() => ({
        type: 'log',
        subType: 'save',
        message: '保存成功',
        data: { id },
      }));
    } else {
      throw new Error(`ID 为 ${id} 的数据不存在`);
    }
  });
}
