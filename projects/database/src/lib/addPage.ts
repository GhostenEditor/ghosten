import { MessageEvent } from './types';
import { resolveTransaction } from './resolve';

export function addPage(
  db: IDBDatabase,
  pageConfig: any,
): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readwrite');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');

  const request = configObjectStore.add(pageConfig);
  request.addEventListener('success', function (event) {
    const id = request.result;
    configHistoryObjectStore.add({
      id,
      timestamp: Date.now(),
      config: {
        metadata: {
          id: null,
          name: 'Untitled',
          description: null,
          status: null,
        },
        global: {},
        boards: [
          {
            id: 'main',
            type: 'main',
            gt: 'root',
            url: '',
            size: '',
            description: '',
            name: 'Main',
            noFooter: false,
            events: null,
            nodeList: [
              {
                type: 'root',
                id: 'root',
              },
            ],
          },
        ],
        template: [],
      },
    });
  });
  return resolveTransaction(transaction).then(() => ({
    type: 'log',
    subType: 'addPage',
    message: '创建成功',
    data: request.result,
  }));
}
