export interface MenuItem {
  id: number;
  label: string;
  parentId?: number;
  parent?: MenuItem;
  path?: string;
  url?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

export interface MessageEvent {
  type: string;
  subType?: string;
  message?: string;
  data?: any;
}
