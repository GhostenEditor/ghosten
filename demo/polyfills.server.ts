global.EventTarget = class {
  // @ts-ignore
  constructor(...data: any[]) {}

  // @ts-ignore
  addEventListener(...data: any[]) {}

  // @ts-ignore
  removeEventListener(...data: any[]) {}

  // @ts-ignore
  dispatchEvent(...data: any[]) {
    return true;
  }
};
(global as any).devicePixelRatio = 1;
