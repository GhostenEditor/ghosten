export function resolveTransaction(
  transaction: IDBTransaction,
): Promise<Event> {
  // transaction.addEventListener(
  //   'error',
  //   error => postMessage({ type: 'error', data: error }),
  //   { once: true },
  // );
  return new Promise(resolve =>
    transaction.addEventListener('complete', event => resolve(event)),
  );
}

export function resolveRequest<T>(request: IDBRequest): Promise<IDBRequest<T>> {
  // request.addEventListener('error', () => {
  //   postMessage({
  //     type: 'error',
  //     data: request.error!.message,
  //   });
  // });
  return new Promise(resolve =>
    request.addEventListener('success', () => resolve(request)),
  );
}
