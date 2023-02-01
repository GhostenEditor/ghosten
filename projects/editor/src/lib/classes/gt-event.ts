import { IGtNode } from '@ghosten/common';

export class GtEventTarget extends EventTarget {
  override addEventListener<K extends keyof GtEventMap>(
    type: K,
    listener: (this: any, ev: GtEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  override addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  override addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean,
  ) {
    super.addEventListener(type, callback, options);
  }
}

export class ChangeActionStartEvent extends Event {
  constructor(public action: IGtNode.Action) {
    super('changeactionstart', { cancelable: true, bubbles: false });
  }
}

export class ChangeActionEndEvent extends Event {
  constructor(public action: IGtNode.Action, public script: string) {
    super('changeactionend', { cancelable: true, bubbles: false });
  }
}

export class EditExpressionStartEvent extends Event {
  constructor(public expression: string) {
    super('editexpressionstart', { cancelable: true, bubbles: false });
  }
}

export class EditExpressionEndEvent extends Event {
  constructor(public expression: string) {
    super('editexpressionend', { cancelable: true, bubbles: false });
  }
}

interface GtEventMap {
  changeactionstart: ChangeActionStartEvent;
  changeactionend: ChangeActionEndEvent;
  editexpressionstart: EditExpressionStartEvent;
  editexpressionend: EditExpressionEndEvent;
}
