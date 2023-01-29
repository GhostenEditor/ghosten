import { confirm as tauriConfirm } from '@tauri-apps/api/dialog';

export function confirm(message?: string): Promise<boolean> {
  return Promise.resolve(tauriConfirm(message!));
}
