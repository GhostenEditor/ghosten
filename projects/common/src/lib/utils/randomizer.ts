export function randomizer(length = 6) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let res = '';
  for (let i = 0; i < length; i++) {
    const id = Math.ceil(Math.random() * 61);
    res += chars[id];
  }
  return res;
}
