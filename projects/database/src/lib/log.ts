export function log(type: 'info' | 'warn' | 'error', message: string, ...rest: any[]) {
  switch (type) {
    case 'info':
      console.info('[IndexedDB]:' + message, ...rest);
      break;
    case 'warn':
      console.warn('[IndexedDB]:' + message, ...rest);
      break;
    case 'error':
      console.error('[IndexedDB]:' + message, ...rest);
      break;
  }
}
