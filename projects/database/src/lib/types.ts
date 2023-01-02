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
