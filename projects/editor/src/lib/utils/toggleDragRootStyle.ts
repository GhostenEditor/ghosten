type StyleProperty = 'userSelect' | 'cursor';
const userSelect = getComputedStyle(document.documentElement).hasOwnProperty(
  'user-select',
)
  ? 'user-select'
  : '-webkit-user-select';

export function setDragRootStyle(property: StyleProperty, value: string) {
  document.documentElement.style.setProperty(fixedProperty(property), value);
}

export function removeDragRootStyle(property: StyleProperty) {
  document.documentElement.style.removeProperty(fixedProperty(property));
}

function fixedProperty(property: StyleProperty): string {
  switch (property) {
    case 'userSelect':
      return userSelect;
    default:
      return property;
  }
}
