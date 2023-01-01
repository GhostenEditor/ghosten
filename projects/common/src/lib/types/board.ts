import { IGtNode } from './gtNode';

export interface BoardData {
  type: string;
  name: string;
  gt: string;
  id: string;
  url: string;
  events: any;
  description: string;
  size: string | null;
  noFooter: boolean;
  nodeList: IGtNode.Config[];
}
