export function getPageList(db: IDBDatabase) {
  const transaction = db.transaction('CONFIG', 'readonly');
  const objectStore = transaction.objectStore('CONFIG');
  const request = objectStore.getAll();
  request.addEventListener('success', () => {
    postMessage({
      type: 'log',
      subType: 'getPageList',
      message: '数据查询成功',
      data: request.result,
    });
  });
}
