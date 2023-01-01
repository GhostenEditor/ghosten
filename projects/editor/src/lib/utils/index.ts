export { default as closest } from './closest';
export { isDescendant } from './isDescendant';
export * from './blackboard.drag';
export * from './drag';
export * from './getDOMTransformMatrix';
export * from './toggleDragRootStyle';

export function reflow(element: HTMLElement) {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
}
