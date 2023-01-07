export interface PageConfig {
  id: number;
  title: string;
  icon: string | null;
  description: string;
  url: string;
  type: 'Function' | 'Directory';
  parentId: number | null;
}
