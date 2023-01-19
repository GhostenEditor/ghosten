export interface MenuItem {
  id: number;
  label: string;
  icon: string | null;
  directory: boolean;
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
