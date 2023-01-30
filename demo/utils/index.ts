import { environment } from '../environments/environment';

export function confirm(message?: string): Promise<boolean> {
  // eslint-disable-next-line no-alert
  return Promise.resolve(window.confirm(message));
}

export function log(type: 'info' | 'warn' | 'error', message: string, ...rest: any[]) {
  switch (type) {
    case 'info':
      environment.debug &&
        console.info(
          '%c' + message,
          'color: white; font-weight: 700; background-color: #404dff;padding: 4px;border-radius: 2px',
          ...rest,
        );
      break;
    case 'warn':
      console.warn(
        '%c' + message,
        'color: #997404; font-weight: 700; background-color: #fff3cd;padding: 4px;border-radius: 2px',
        ...rest,
      );
      break;
    case 'error':
      console.error(message, ...rest);
      break;
  }
}
