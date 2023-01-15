import pako from 'pako';

export function decode(data: string): string {
  const matcher = data.match(/\w{2}/g);
  if (!matcher) {
    return '';
  }

  return pako.inflate(new Uint8Array(matcher.map((str: string) => parseInt(str, 16))), {
    to: 'string',
  });
}

// export function encode(data: string): string {}
