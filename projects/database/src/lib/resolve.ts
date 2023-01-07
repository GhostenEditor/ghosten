export function resolveTransaction(
  transaction: IDBTransaction,
): Promise<Event> {
  return new Promise((resolve, reject) => {
    transaction.addEventListener('complete', event => resolve(event), {
      once: true,
    });
    transaction.addEventListener(
      'error',
      event => {
        reject(event);
      },
      {
        once: true,
      },
    );
  });
}

export function resolveRequest<T>(request: IDBRequest): Promise<IDBRequest<T>> {
  return new Promise((resolve, reject) => {
    request.addEventListener('success', () => resolve(request), { once: true });
    request.addEventListener('error', event => reject(event), { once: true });
  });
}
