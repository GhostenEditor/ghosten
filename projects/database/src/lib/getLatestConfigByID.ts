import pako from 'pako';

import { resolveRequest, resolveTransaction } from './resolve';
import { MessageEvent } from './types';

export function getLatestConfigByID(
  db: IDBDatabase,
  { id }: any,
): Promise<MessageEvent> {
  const transaction = db.transaction(['CONFIG', 'CONFIG_HISTORY'], 'readonly');
  const configObjectStore = transaction.objectStore('CONFIG');
  const configHistoryObjectStore = transaction.objectStore('CONFIG_HISTORY');
  resolveTransaction(transaction).then();

  return Promise.all([
    resolveRequest<any>(configObjectStore.get(+id)).then(
      request => request.result,
    ),
    resolveRequest<IDBCursorWithValue>(
      configHistoryObjectStore
        .index('id')
        .openCursor(IDBKeyRange.only(+id), 'prev'),
    ).then<any>(request => request.result && request.result.value),
  ]).then(
    ([res1, res2]) => {
      const data = { ...res1, ...res2 };
      if (data.parentId === 'null') data.parentId = null;
      if (data.config) {
        data.config = pako.inflate(
          data.config.match(/\w{2}/g).map((str: string) => parseInt(str, 16)),
          {
            to: 'string',
          },
        );
      }
      return {
        type: 'log',
        subType: 'getLatestConfigByID',
        data,
      };
    },
    error => ({
      type: 'error',
      message: error.toString(),
    }),
  );

  // const request = configHistoryObjectStore
  //   .index('id')
  //   .openCursor(IDBKeyRange.only(+id), 'prev');
  // return resolveRequest(request)
  //   .then(() => {
  //     const cursor = request.result;
  //     const _req = configObjectStore.get(+id);
  //     return resolveRequest(_req).then(() => ({
  //       cursor,
  //       _cursor: _req.result,
  //     }));
  //   })
  //   .then(
  //     ({ cursor, _cursor }) => ({
  //       type: 'log',
  //       subType: 'getLatestConfigByID',
  //       data: cursor ? { ...cursor.value, ..._cursor } : null,
  //     }),
  //     error => ({
  //       type: 'error',
  //       message: error.toString(),
  //     }),
  //   );
}
