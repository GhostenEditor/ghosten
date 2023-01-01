export function resolveTransaction(
  transaction: IDBTransaction,
): Promise<Event> {
  transaction.addEventListener(
    'error',
    error => postMessage({ type: 'error', data: error }),
    { once: true },
  );
  return new Promise(resolve =>
    transaction.addEventListener('complete', event => resolve(event)),
  );
}

export function resolveRequest(request: IDBRequest): Promise<Event> {
  request.addEventListener('error', () => {
    postMessage({
      type: 'error',
      data: request.error,
    });
  });
  return new Promise(resolve =>
    request.addEventListener('success', event => resolve(event)),
  );
}
