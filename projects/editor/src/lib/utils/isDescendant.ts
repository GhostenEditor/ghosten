export function isDescendant(element: HTMLElement, ancestor: HTMLElement): boolean {
  let tmp: any = element;
  while (tmp !== ancestor && tmp !== null) {
    tmp = tmp.parentElement;
  }
  return tmp === ancestor && tmp !== null;
}
