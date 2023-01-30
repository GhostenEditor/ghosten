import { IGtNode } from './gtNode';

export interface BoardData {
  type: 'main' | 'modal' | 'cc' | 'rcc';
  title?: string;
  name: string;
  gt: string;
  id: string;
  url: string;
  events: any;
  description: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | null;
  modalFooter: boolean;
  nodeList: IGtNode.Config[];
}
