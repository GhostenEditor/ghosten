export function confirm(message?: string): Promise<boolean> {
  // eslint-disable-next-line no-alert
  return Promise.resolve(window.confirm(message));
}
