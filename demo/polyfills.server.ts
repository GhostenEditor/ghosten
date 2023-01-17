global.EventTarget = class {
  constructor(...data: any[]) {}

  addEventListener(...data: any[]) {}

  removeEventListener(...data: any[]) {}

  dispatchEvent(...data: any[]) {
    return true;
  }
};
(global as any).devicePixelRatio = 1;
