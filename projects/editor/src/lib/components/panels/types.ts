import { GtNode } from '@ghosten/common';

export interface OpenDialogEvent {
  type: string;
  gtNode?: GtNode;
  args: any[];
  cb: (result: any) => void;
}
