export function deleteDB(DBName: string) {
  const request = indexedDB.deleteDatabase(DBName);

  request.addEventListener('success', () => {
    postMessage({
      type: 'log',
      subType: 'deleteDB',
      message: '数据库删除成功',
    });
  });
  request.addEventListener('error', () => {
    postMessage({
      type: 'error',
      subType: 'deleteDB',
      message: '数据库删除失败',
    });
  });
}
