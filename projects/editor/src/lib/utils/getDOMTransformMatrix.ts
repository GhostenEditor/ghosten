export function getDOMTransformMatrix(element: Element): DOMMatrix {
  const style = getComputedStyle(element);
  return new WebKitCSSMatrix(style.transform || style.webkitTransform);
}
