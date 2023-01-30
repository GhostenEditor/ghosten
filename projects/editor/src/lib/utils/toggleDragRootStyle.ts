type StyleProperty = 'userSelect' | 'cursor';
// todo ssr support
const userSelect = getComputedStyle(document.documentElement).hasOwnProperty('user-select')
  ? 'user-select'
  : '-webkit-user-select';

export function setDragRootStyle(root: HTMLElement, property: StyleProperty, value: string) {
  root.style.setProperty(fixedProperty(property), value);
}

export function removeDragRootStyle(root: HTMLElement, property: StyleProperty) {
  root.style.removeProperty(fixedProperty(property));
}

function fixedProperty(property: StyleProperty): string {
  switch (property) {
    case 'userSelect':
      return userSelect;
    default:
      return property;
  }
}
