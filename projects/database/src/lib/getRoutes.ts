export function getRoutes(db:IDBDatabase){
  const transaction = db.transaction('CONFIG', 'readonly');
  const objectStore = transaction.objectStore('CONFIG');
  const request = objectStore.getAll();
  request.addEventListener('success', () => {
    postMessage({
      type: 'log',
      subType: 'getRoutes',
      message: '数据查询成功',
      data: request.result,
    });
  });
}
