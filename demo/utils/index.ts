import { environment } from '../environments/environment';

export function confirm(message?: string): Promise<boolean> {
  // eslint-disable-next-line no-alert
  return Promise.resolve(window.confirm(message));
}

export function log(type: 'info' | 'warn' | 'error', prefix: string, message: string | null, ...rest: any[]) {
  switch (type) {
    case 'info':
      environment.debug &&
        console.info(
          '%c' + prefix,
          'color: white; font-weight: 700; background-color: #404dff;padding: 4px;border-radius: 2px',
          message,
          ...rest,
        );
      break;
    case 'warn':
      console.warn(
        '%c' + prefix,
        'color: #997404; font-weight: 700; background-color: #fff3cd;padding: 4px;border-radius: 2px',
        message,
        ...rest,
      );
      break;
    case 'error':
      throw message;
  }
}
