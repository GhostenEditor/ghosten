export const clamp = (number: number, boundOne: number, boundTwo?: number) => {
  if (boundTwo === undefined) {
    return Math.min(number, boundOne);
  } else {
    const lower = Math.min(boundOne, boundTwo);
    const upper = Math.max(boundOne, boundTwo);
    return Math.min(upper, Math.max(number, lower));
  }
};
export const isEmpty = (obj: any) =>
  [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
export const upperFirst = (string: string): string => (string ? string.charAt(0).toUpperCase() + string.slice(1) : '');
export const cloneDeep = (value: any) => JSON.parse(JSON.stringify(value));
