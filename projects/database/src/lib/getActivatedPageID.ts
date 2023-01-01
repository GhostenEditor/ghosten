export function getActivatedPageID(db: IDBDatabase) {
  const transaction = db.transaction('EDIT_CONFIG', 'readonly');
  const objectStore = transaction.objectStore('EDIT_CONFIG');
  const request = objectStore.get('activated ID');
  request.addEventListener('success', () => {
    postMessage({
      type: 'log',
      subType: 'getActivatedPageID',
      message: '数据查询成功',
      data: request.result,
    });
  });
}
