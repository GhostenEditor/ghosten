export class Core {
  canPaste: boolean = false;
  canCopy: boolean = false;
  canDelete: boolean = false;
  canCut: boolean = false;
  canHasChild: boolean = false;
  dynamicTemplate = false;
  acceptedChildType: string[] = [];

  [property: string]: any;

  static create(core: object, parent: Core = Core.prototype): Core {
    const newCore = Object.create(parent);
    Object.assign(newCore, core);
    return newCore;
  }
}
